package br.com.pokemundo.model.species;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import br.com.pokemundo.model.pokemon.Pokemon;

public class Variety {

    @SerializedName("is_default")
    private Boolean isDefault;
    @Expose
    private Pokemon pokemon;

    public Boolean getIsDefault() {
        return isDefault;
    }

    public void setIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
    }

    public Pokemon getPokemon() {
        return pokemon;
    }

    public void setPokemon(Pokemon pokemon) {
        this.pokemon = pokemon;
    }

}
