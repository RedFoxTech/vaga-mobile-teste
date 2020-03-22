package com.example.lenovo.pokedex.presenter;



import android.util.Log;

import com.example.lenovo.pokedex.model.DefaultApiAttributes;
import com.example.lenovo.pokedex.model.PokemonItem;
import com.example.lenovo.pokedex.service.PokemonService;
import com.example.lenovo.pokedex.view.ListarPokemonsView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ListarPokemonsPresenter {

    PokemonService service;
    ListarPokemonsView view;
    PokemonItem pokemonItems;
    List<DefaultApiAttributes> listaDefaultApiAttributes;
    DefaultApiAttributes defaultApiAttributes;

    public ListarPokemonsPresenter(PokemonService service, ListarPokemonsView view){
        this.service = service;
        this.view = view;
    }

    public void CarregarPokemons(){
        Call<PokemonItem> call = service.obterPokemons();
        call.enqueue(new Callback<PokemonItem>() {
            @Override
            public void onResponse(Call<PokemonItem> call, Response<PokemonItem> response) {
                pokemonItems = response.body();
                Log.d("testando", pokemonItems.getResults().size()+"");
                view.sucessoListagem(pokemonItems.getResults());
            }

            @Override
            public void onFailure(Call<PokemonItem> call, Throwable t) {
                Log.d("erro_api", t.getMessage());
                view.fracassoListagem();
            }
        });
    }

}
