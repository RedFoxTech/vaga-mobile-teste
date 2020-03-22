package com.example.lenovo.pokedex.model;

import java.util.List;

public class PokemonItem {
    private List<DefaultApiAttributes> results;


    public List<DefaultApiAttributes> getResults() {
        return results;
    }

    public void setResults(List<DefaultApiAttributes> results) {
        this.results = results;
    }
}
