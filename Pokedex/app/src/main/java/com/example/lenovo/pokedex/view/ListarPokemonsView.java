package com.example.lenovo.pokedex.view;

import com.example.lenovo.pokedex.model.DefaultApiAttributes;
import com.example.lenovo.pokedex.model.PokemonItem;

import java.util.List;

public interface ListarPokemonsView {

    void sucessoListagem(List<DefaultApiAttributes> pokemonsItem);
    void fracassoListagem();

}
