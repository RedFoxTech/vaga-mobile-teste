package br.com.pokemundo.interfaces;

import androidx.fragment.app.Fragment;

import br.com.pokemundo.model.pokemon.Pokemon;

public interface IntegrationFragment {
    void integrationDefault(Fragment fragment);
    void integrationPokemon(Fragment fragment, Pokemon pokemon);
    void integrationNoStack(Fragment fragment, Pokemon pokemon);
    void integrationGame(Fragment fragment, Pokemon pokemon,Boolean ok);
}
