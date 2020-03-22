package com.example.lenovo.pokedex.presenter;

import android.util.Log;

import com.example.lenovo.pokedex.model.Pokemon;
import com.example.lenovo.pokedex.service.PokemonService;
import com.example.lenovo.pokedex.view.VisualizarPokemonView;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class VisualizarPokemonPresenter {

    VisualizarPokemonView view;
    PokemonService service;

    Pokemon pokemon;

    public VisualizarPokemonPresenter(VisualizarPokemonView view, PokemonService service){
        //fazendo injeção de dep. pra conseguir responder o resultado pela interface
        this.service = service;
        this.view = view;
    }

    public  void obterPokemon(int idPokemon){
        Call<Pokemon> call = service.obterPokemonId(idPokemon);
        call.enqueue(new Callback<Pokemon>() {
            @Override
            public void onResponse(Call<Pokemon> call, Response<Pokemon> response) {
                pokemon = response.body();
                view.sucessoVisualizarPokemon(pokemon);
                //passando o resultado pra view pela interface
            }

            @Override
            public void onFailure(Call<Pokemon> call, Throwable t) {
                Log.d("teste", t.getMessage());
            }
        });
    }

}
