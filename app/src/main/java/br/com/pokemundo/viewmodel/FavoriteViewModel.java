package br.com.pokemundo.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;

import br.com.pokemundo.model.pokemon.Pokemon;

public class FavoriteViewModel extends AndroidViewModel {
    public MutableLiveData<List<Pokemon>> pokemonLiveData = new MutableLiveData<>();
    private MutableLiveData<Boolean> loadingLiveData = new MutableLiveData<>();
    private MutableLiveData<Throwable> errorLiveData = new MutableLiveData<>();

    public FavoriteViewModel(@NonNull Application application) {
        super(application);
    }

    public MutableLiveData<Boolean> getLoadingLiveData() {
        return loadingLiveData;
    }

    public MutableLiveData<Throwable> getErrorLiveData() {
        return errorLiveData;
    }

    public void getFavorites(){
        // Pegamos a instancia do firebase, objeto necessario para salvar no banco de dados
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        // pegamos a referencia para onde no firebase queremos salvar nossos dados
        DatabaseReference reference = database.getReference("pokefavorites"+user.getUid());

        // Adicionamos o loistener par pegar os resultados do firebase
        reference.orderByKey().addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                List<Pokemon> pokemons = new ArrayList<>();
                // Quando retornar algo do firebase percorremos os dados e colocamos na lista
                for (DataSnapshot resultSnapshot: dataSnapshot.getChildren()) {
                    Pokemon pokemon = resultSnapshot.getValue(Pokemon.class);
                    pokemons.add(pokemon);
                }

                pokemonLiveData.setValue(pokemons);
                // por fim atualizamos o adpter com os favoritos resgatados do firebase

            }

            public void onCancelled(@NonNull DatabaseError databaseError) {
            }
        });
    }
}

