package br.com.pokemundo.data.nerwork;

import br.com.pokemundo.model.pokemon.PokemonResponse;
import br.com.pokemundo.model.species.Specie;
import io.reactivex.Single;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface Api {

    @GET("pokemon")
    Single<PokemonResponse> getPokemons(@Query("offset") int offset , @Query("limit") int limit);

    @GET("pokemon-species/{id}")
    Single<Specie> getPokemonSpecies(@Path("id") int id);
}
