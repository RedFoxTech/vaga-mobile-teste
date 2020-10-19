package br.com.pokemundo.viewmodel;

import android.app.Application;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import br.com.pokemundo.data.database.DataBase;
import br.com.pokemundo.data.database.dao.SpecieDao;
import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.model.species.Specie;
import br.com.pokemundo.repository.PokemonRepository;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.schedulers.Schedulers;

import static androidx.constraintlayout.widget.Constraints.TAG;
import static br.com.pokemundo.util.AppUtil.isNetworkConnected;

public class SpeciesViewModel extends AndroidViewModel {
    private MutableLiveData<Specie> specieLiveData = new MutableLiveData<>();
    private MutableLiveData<Boolean> loadingLiveData = new MutableLiveData<>();
    private MutableLiveData<Throwable> errorLiveData = new MutableLiveData<>();
    public MutableLiveData<Pokemon> favoriteAdded = new MutableLiveData<>();
    public MutableLiveData<Boolean> isFavoriteAdded = new MutableLiveData<>();

    private CompositeDisposable disposable = new CompositeDisposable();
    private PokemonRepository repository = new PokemonRepository();

    public SpeciesViewModel(@NonNull Application application) {
        super(application);
    }

    public LiveData<Specie> getSpecieLiveData() {
        return specieLiveData;
    }

    public LiveData<Boolean> getLoadingLiveData() {
        return loadingLiveData;
    }

    public LiveData<Throwable> getErrorLiveData() {
        return errorLiveData;
    }

    public void getSpecie(int id) {
        if (isNetworkConnected(getApplication())) {
            getApiSpecie(id);
        } else {
            getLocalSpecieId(id);
        }
    }

    private void getApiSpecie(int id) {
        disposable.add(repository.getSpeciesApi(id)
                .subscribeOn(Schedulers.newThread())
                .map(specie -> saveSpecie(specie))
                .observeOn(AndroidSchedulers.mainThread())
                .doOnSubscribe(disposable1 -> loadingLiveData.setValue(true))
                .doAfterTerminate(() -> loadingLiveData.setValue(false))
                .subscribe(specie -> specieLiveData.setValue(specie)
                        , throwable -> errorLiveData.setValue(throwable))
        );
    }


    private void getLocalSpecieId(int id) {
        disposable.add(repository.getSpecieDatabase(getApplication().getApplicationContext(), id)
                .subscribeOn(Schedulers.newThread())
                .observeOn(AndroidSchedulers.mainThread())
                .doOnSubscribe(disposable1 -> loadingLiveData.setValue(false))
                .doAfterTerminate(() -> loadingLiveData.setValue(false))
                .subscribe(specie -> specieLiveData.setValue(specie)
                        , throwable -> errorLiveData.setValue(throwable))
        );
    }


    private Specie saveSpecie(Specie specie) {
        SpecieDao specieDao = DataBase.getDatabase(getApplication()
                .getApplicationContext())
                .specieDao();
        specieDao.insert(specie);
        return specie;
    }

    public void addFavorite(Pokemon pokemon) {
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        DatabaseReference reference = database.getReference("pokefavorites" + user.getUid());

        // criamos uma chave unica para o item, assim não haverá conflitos
        String key = pokemon.getId().toString();//reference.push().getKey();

        // setamos o item no caminho da chave criada ex: favorites/kfdhsifyadfhidf/filme
        reference.child(key).setValue(pokemon);

        // Adicionnamos um listener pra sabermos se o item foi salvo no firebase
        reference.child(key).addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {

                Pokemon pokemon = dataSnapshot.getValue(Pokemon.class);

                // mostamos qe foi salvo nos favoritos
                favoriteAdded.setValue(pokemon);
            }

            @Override
            public void onCancelled(DatabaseError error) {
                // Falhou ao ler valor da base do firebase
                errorLiveData.setValue(error.toException());
                Log.e(TAG, "Failed to read movie", error.toException());
            }
        });
    }

    public void removeFavorite(Pokemon pokemon) {
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        DatabaseReference reference = database.getReference("pokefavorites" + user.getUid());

        reference
                .orderByChild("id")
                .addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {

                        // Quando retornar algo do firebase percorremos os dados e colocamos na lista
                        for (DataSnapshot resultSnapshot : dataSnapshot.getChildren()) {
                            Pokemon resultFirebase = resultSnapshot.getValue(Pokemon.class);
                            // Se acho o mesmo id removemos o item
                            if (pokemon.getId().equals(resultFirebase.getId())) {
                                resultSnapshot.getRef().removeValue();
                                favoriteAdded.setValue(null);
                            }
                        }
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError error) {
                        // Falhou ao ler valor da base do firebase
                        errorLiveData.setValue(error.toException());
                        Log.e(TAG, "Failed to read movie", error.toException());
                    }
                });
    }

    public void isFavorite(Pokemon pokemon) {
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        DatabaseReference reference = database.getReference("pokefavorites" + user.getUid());

        reference
                .orderByChild("id")
                .addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                        boolean isFav = false;
                        // Quando retornar algo do firebase percorremos os dados e colocamos na lista
                        for (DataSnapshot resultSnapshot : dataSnapshot.getChildren()) {
                            Pokemon resultFirebase = resultSnapshot.getValue(Pokemon.class);
                            // Se acho o mesmo id removemos o item
                            if (pokemon.getId().equals(resultFirebase.getId())) {
                                isFav = true;
                                break;
                            }
                        }
                        isFavoriteAdded.setValue(isFav);
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError error) {
                        // Falhou ao ler valor da base do firebase
                        errorLiveData.setValue(error.toException());
                        Log.e(TAG, "Failed to read movie", error.toException());
                    }
                });
    }
    //Clear call's RX
    @Override
    protected void onCleared() {
        super.onCleared();
        disposable.clear();
    }
}
