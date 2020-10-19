package br.com.pokemundo.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

import com.google.firebase.auth.FirebaseAuth;

import io.reactivex.disposables.CompositeDisposable;

public class RegisterViewModel extends AndroidViewModel {
    private MutableLiveData<Boolean> isLogged = new MutableLiveData<>();
    private MutableLiveData<Throwable> liveDataError = new MutableLiveData<>();
    private MutableLiveData<Boolean> isLoading = new MutableLiveData<>();
    private CompositeDisposable disposable = new CompositeDisposable();

    public RegisterViewModel(@NonNull Application application) {
        super(application);
    }

    @Override
    protected void onCleared() {
        super.onCleared();
        disposable.clear();
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

    public void register(String email, String password) {
        // seta o loading para true para dar feedback ao usuário, que começou o cadastro no firebase
        isLoading.setValue(true);

        FirebaseAuth firebaseAuth = FirebaseAuth.getInstance();
        firebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(task -> {

                    // seta o loading para true para dar feedback ao uauário, que terminou o cadastro
                    isLoading.setValue(false);

                    // Se conseguiu se registrar com sucesso vamos para a home
                    if (task.isSuccessful()) {
                        isLogged.setValue(true);
                    } else {

                        // Se deu algum erro mostramos para o usuário a mensagem
                        liveDataError.setValue(task.getException());
                    }
                });
    }

}

