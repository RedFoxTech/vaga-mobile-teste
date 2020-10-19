package br.com.pokemundo.view;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ProgressBar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProviders;

import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputLayout;

import br.com.pokemundo.R;
import br.com.pokemundo.viewmodel.RegisterViewModel;

public class RegisterActivity extends AppCompatActivity {
    private TextInputLayout textInputEmail;
    private TextInputLayout textInputPassword;
    private Button btnRegister;
    private ProgressBar progressBarRegister;
    private RegisterViewModel registerViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        initViews();

        btnRegister.setOnClickListener(v -> {
            String email = textInputEmail.getEditText().getText().toString();
            String password = textInputPassword.getEditText().getText().toString();

            // Se email e senha são validos tentamos o registro no firebase
            if (validate(email, password)) {
                registerViewModel.register(email, password);
            }
        });

        //Se registrou com sucesso vamos direcionar para tela  HOME
        registerViewModel.getIsLogged().observe(this, isLogged -> {
            if (isLogged) {
                startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                finish();
            }
        });

        // Se deu algum erro mostramos na tela
        registerViewModel.getLiveDataError().observe(this, throwable -> {
            String error = throwable.getMessage();
            Snackbar.make(btnRegister, error, Snackbar.LENGTH_LONG).show();
        });


        // Mostramos o loading para feeed back ao usuário enquanto carega o login
        registerViewModel.getIsLoading().observe(this, loading -> {
            if (loading) {
                progressBarRegister.setVisibility(View.VISIBLE);
            } else {
                progressBarRegister.setVisibility(View.GONE);
            }
        });
    }

    private void initViews() {
        btnRegister = findViewById(R.id.btnRegister);
        textInputEmail = findViewById(R.id.textInputEmail);
        textInputPassword = findViewById(R.id.textInputPassword);
        progressBarRegister = findViewById(R.id.progressBarRegister);
        registerViewModel = ViewModelProviders.of(this).get(RegisterViewModel.class);
        progressBarRegister.setVisibility(View.GONE);
    }

    // Essa validação pode ficar na view em vez do viewmodel, pois ela trata os elementos da tela
    private boolean validate(String email, String password) {
        if (email.isEmpty()) {
            textInputEmail.setError(getString(R.string.register_emailerror_a));
            textInputEmail.requestFocus();
            return false;
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            textInputEmail.setError(getString(R.string.register_emailerror_b));
            textInputEmail.requestFocus();
            return false;
        }
        textInputEmail.setError(null);

        if (password.isEmpty()) {
            textInputPassword.setError(getString(R.string.register_passerror_a));
            textInputPassword.requestFocus();
            return false;
        }

        if (password.length() < 6) {
            textInputPassword.setError(getString(R.string.register_passerror_b));
            textInputPassword.requestFocus();
            return false;
        }

        return true;
    }

}
