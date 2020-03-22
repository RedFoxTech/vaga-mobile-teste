package com.example.lenovo.pokedex.service;


import com.example.lenovo.pokedex.model.Pokemon;
import com.example.lenovo.pokedex.model.PokemonItem;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface PokemonService {
    String URL_BASE = "http://pokeapi.co/";

    //limit para o termos um response tds pokemons, caso contrario vem apenas 20
    @GET("https://pokeapi.co/api/v2/pokemon/?limit=964")
    Call<PokemonItem> obterPokemons();

    @GET("api/v2/pokemon/{id}/")
    Call<Pokemon> obterPokemonId(@Path("id") int id);


}
