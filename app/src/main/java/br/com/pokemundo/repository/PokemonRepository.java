package br.com.pokemundo.repository;

import android.content.Context;

import java.util.List;

import br.com.pokemundo.data.database.DataBase;
import br.com.pokemundo.data.database.dao.PokemonDao;
import br.com.pokemundo.data.database.dao.SpecieDao;
import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.model.pokemon.PokemonResponse;
import br.com.pokemundo.model.species.Specie;
import io.reactivex.Flowable;
import io.reactivex.Single;

import static br.com.pokemundo.data.nerwork.ApiService.getApiService;

public class PokemonRepository {

    //Select Pokemon Database
    public Flowable<List<Pokemon>> getPokemonDatabase(Context context) {
        DataBase databasePokemon = DataBase.getDatabase(context);
        PokemonDao pokemonDao = databasePokemon.pokemonDao();
        return pokemonDao.getAllRxJava();
    }

    public Single<PokemonResponse> getPokemonApi(int offset, int limit) {
        Single<PokemonResponse> pokemonResponseSingle = getApiService()
                .getPokemons(offset, limit);
        return pokemonResponseSingle;
    }


    //Select Specie Database
    public Flowable<Specie> getSpecieDatabase(Context context, int id) {
        DataBase databaseSpecie = DataBase.getDatabase(context);
        SpecieDao specieDao = databaseSpecie.specieDao();
        return specieDao.getIdRxJava(id);
    }

    public Single<Specie> getSpeciesApi(int id) {
        Single<Specie> speciesResponseSingle = getApiService()
                .getPokemonSpecies(id);
        return speciesResponseSingle;
    }


}
