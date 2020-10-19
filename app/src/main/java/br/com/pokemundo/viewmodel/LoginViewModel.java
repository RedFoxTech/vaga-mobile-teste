package br.com.pokemundo.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

import com.google.firebase.auth.FirebaseAuth;

import io.reactivex.disposables.CompositeDisposable;

public class LoginViewModel extends AndroidViewModel {
    private MutableLiveData<Boolean> isLogged = new MutableLiveData<>();
    private MutableLiveData<Throwable> liveDataError = new MutableLiveData<>();
    private MutableLiveData<Boolean> isLoading = new MutableLiveData<>();
    private CompositeDisposable disposable = new CompositeDisposable();

    private FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();


    public LoginViewModel(@NonNull Application application) {
        super(application);
    }

    public MutableLiveData<Boolean> getIsLogged() {
        return isLogged;
    }

    public void setIsLogged(MutableLiveData<Boolean> isLogged) {
        this.isLogged = isLogged;
    }

    public MutableLiveData<Throwable> getLiveDataError() {
        return liveDataError;
    }

    public void setLiveDataError(MutableLiveData<Throwable> liveDataError) {
        this.liveDataError = liveDataError;
    }

    public MutableLiveData<Boolean> getIsLoading() {
        return isLoading;
    }

    public void setIsLoading(MutableLiveData<Boolean> isLoading) {
        this.isLoading = isLoading;
    }

    public void loginWithEmail(String email, String password) {
        // seta o loading para true para dar feedback ao uauário, que começou o login
        isLoading.setValue(true);
        // tentamos fazer o login com o email e senha no firebase
        firebaseAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(task -> {

                    // seta o loading para true para dar feedback ao uauário, qeu terminou o login
                    isLoading.setValue(false);

                    // Caso login com sucesso vamos para tela  Home
                    if (task.isSuccessful()) {
                        isLogged.setValue(true);
                    } else {
                        // Se deu algum erro mostramos para o usuário a mensagem
                        liveDataError.setValue(task.getException());
                    }
                });
    }

    @Override
    protected void onCleared() {
        super.onCleared();
        disposable.clear();
    }
}

