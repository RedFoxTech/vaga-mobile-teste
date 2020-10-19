package br.com.pokemundo.view;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProviders;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputLayout;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;

import br.com.pokemundo.R;
import br.com.pokemundo.viewmodel.LoginViewModel;

public class LoginActivity extends AppCompatActivity implements GoogleApiClient.OnConnectionFailedListener {
    private static final int RESULT_GOOGLE = 200;
    private Button btnLogin;
    private Button btnGoogle;
    private TextInputLayout textInputLayoutEmail;
    private TextInputLayout textInputLayoutPassword;
    private TextView textViewRegister;
    private ProgressBar progressBarLogin;
    private Switch switchRemember;
    private LoginViewModel loginViewModel;
    private GoogleSignInClient googleSignInClient;
    private FirebaseAuth firebaseAuth;
    private FirebaseAuth.AuthStateListener authStateListener;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        final SharedPreferences preferences = getSharedPreferences("APPPOKEDEX", MODE_PRIVATE);

        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);


        firebaseAuth = FirebaseAuth.getInstance();
        initViews();
        textInputLayoutEmail.getEditText().setText(preferences.getString("EMAIL", ""));
        textInputLayoutPassword.getEditText().setText(preferences.getString("PASSW", ""));

        //Vai para tela de registro de usuário
        textViewRegister.setOnClickListener(v -> startActivity(new Intent(LoginActivity.this, RegisterActivity.class)));

        btnLogin.setOnClickListener(v -> {
            String email = textInputLayoutEmail.getEditText().getText().toString();
            String password = textInputLayoutPassword.getEditText().getText().toString();

            if (!email.isEmpty() && !password.isEmpty()) {
                loginViewModel.loginWithEmail(email, password);
            } else {
                if (email.isEmpty()) {
                    textInputLayoutEmail.setError(getString(R.string.register_emailerror_a));
                    textInputLayoutEmail.requestFocus();
                } else {
                    textInputLayoutEmail.setError(null);
                }


                if (password.isEmpty()) {
                    textInputLayoutPassword.setError(getString(R.string.register_passerror_a));
                    textInputLayoutPassword.requestFocus();
                } else {
                    textInputLayoutPassword.setError(null);
                }
            }
        });

        //Se logou com sucesso vamos direcionar para tela  HOME
        loginViewModel.getIsLogged().observe(this, isLogged -> {
            if (isLogged) {

                //Verifica se Switch esta true e guarda dados login
                if (switchRemember.isChecked()) {
                    String email = textInputLayoutEmail.getEditText().getText().toString();
                    String password = textInputLayoutPassword.getEditText().getText().toString();
                    preferences.edit().putString("EMAIL", email).commit();
                    preferences.edit().putString("PASSW", password).commit();
                } else {
                    preferences.edit().putString("EMAIL", "").commit();
                    preferences.edit().putString("PASSW", "").commit();
                }

                startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                finish();
            }
        });

        // Se deu algum erro mostra na tela
        loginViewModel.getLiveDataError().observe(this, throwable -> {
            String error = throwable.getMessage();
            Snackbar.make(btnLogin, error, Snackbar.LENGTH_LONG).show();
        });

        // Mostra o loading para feed back ao usuário enquanto carrega o login
        loginViewModel.getIsLoading().observe(this, loading -> {
            if (loading) {
                progressBarLogin.setVisibility(View.VISIBLE);
            } else {
                progressBarLogin.setVisibility(View.GONE);
            }
        });


        authStateListener = firebaseAuth -> {
            FirebaseUser user = firebaseAuth.getCurrentUser();
            if (user != null) {
                startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                finish();
            }
        };


        btnGoogle.setOnClickListener(v -> {
            try {
                //Google Sign In
                GoogleSignInOptions options = new GoogleSignInOptions
                        .Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                        .requestIdToken(getString(R.string.default_web_client_id))
                        .requestEmail()
                        .build();

                googleSignInClient = GoogleSignIn.getClient(this, options);
                signIn();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    private void initViews() {
        btnLogin = findViewById(R.id.btnLogin);
        btnGoogle = findViewById(R.id.btnGoogle);
        textViewRegister = findViewById(R.id.textViewRegister);
        textInputLayoutEmail = findViewById(R.id.textInputLayoutEmail);
        textInputLayoutPassword = findViewById(R.id.textInputLayoutPassword);
        switchRemember = findViewById(R.id.switchRemember);
        progressBarLogin = findViewById(R.id.progressBarLogin);
        progressBarLogin.setVisibility(View.GONE);
        loginViewModel = ViewModelProviders.of(this).get(LoginViewModel.class);

    }

    private void signIn() {
        Intent intent = googleSignInClient.getSignInIntent();
        startActivityForResult(intent, RESULT_GOOGLE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == RESULT_GOOGLE) {
            // The Task returned from this call is always completed, no need to attach a listener.
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);

            try {

                GoogleSignInAccount account = task.getResult(ApiException.class);
                authWithGoogle(account);

            } catch (ApiException e) {

                e.printStackTrace();

            }
        }
    }

    private void authWithGoogle(GoogleSignInAccount account) {
        AuthCredential credential = GoogleAuthProvider.getCredential(account.getIdToken(), null);

        firebaseAuth.signInWithCredential(credential)
                .addOnCompleteListener(this, task -> {
                    if (task.isSuccessful()) {
                        goToHome();
                    } else {
                        Toast.makeText(getApplicationContext(), "Auth Error", Toast.LENGTH_SHORT).show();
                    }
                });
    }

    private void goToHome() {
        // Sign in success, update UI with the signed-in user's information
        startActivity(new Intent(getApplicationContext(), HomeActivity.class));
        finish();
    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {
        Toast.makeText(getApplicationContext(), "Authentication Error", Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onStart() {
        super.onStart();
        firebaseAuth.addAuthStateListener(authStateListener);
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (authStateListener != null) {
            firebaseAuth.removeAuthStateListener(authStateListener);
        }
    }

}