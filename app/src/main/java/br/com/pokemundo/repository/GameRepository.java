package br.com.pokemundo.repository;

import android.content.Context;
import android.content.res.AssetManager;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import br.com.pokemundo.model.pokemon.PokemonResponse;
import io.reactivex.Single;

public class GameRepository {
    public Single<PokemonResponse> getJsonPokemon(Context context){
        try {
            AssetManager manager = context.getAssets();
            InputStream newJson = manager.open("pokemon.json");
            BufferedReader reader = new BufferedReader(new InputStreamReader(newJson));
            Gson gson = new Gson();

            PokemonResponse pokemonResponse = gson.fromJson(reader, PokemonResponse.class);

            return Single.just(pokemonResponse);

        } catch (IOException e) {

            e.printStackTrace();
            return Single.error(e);

        }
    }
}

