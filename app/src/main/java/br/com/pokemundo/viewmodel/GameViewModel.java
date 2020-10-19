package br.com.pokemundo.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import java.util.List;

import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.repository.GameRepository;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.schedulers.Schedulers;

public class GameViewModel extends AndroidViewModel {
    private MutableLiveData<List<Pokemon>> gameLiveData = new MutableLiveData<>();
    private MutableLiveData<Throwable> errorLiveData = new MutableLiveData<>();
    private MutableLiveData<Boolean> loadingLiveData = new MutableLiveData<>();
    private CompositeDisposable disposable = new CompositeDisposable();

    private GameRepository repository = new GameRepository();

    public GameViewModel(@NonNull Application application) {
        super(application);
    }

    @Override
    protected void onCleared() {
        super.onCleared();
        disposable.clear();
    }

    public LiveData<List<Pokemon>> getGameLiveData() {
        return gameLiveData;
    }

    public LiveData<Boolean> getLoadingLiveData() {
        return loadingLiveData;
    }

    public LiveData<Throwable> getErrorLiveData() {
        return errorLiveData;
    }

    public void getPokemonJson() {
        disposable.add(
                repository.getJsonPokemon(getApplication().getApplicationContext())
                        .subscribeOn(Schedulers.newThread())
                        .observeOn(AndroidSchedulers.mainThread())
                        .doOnSubscribe(disposable1 -> loadingLiveData.setValue(true))
                        .doAfterTerminate(() -> loadingLiveData.setValue(false))
                        .subscribe(pokemonResponse -> gameLiveData.setValue(pokemonResponse.getResults())
                                , throwable -> errorLiveData.setValue(throwable))
        );
    }
}
