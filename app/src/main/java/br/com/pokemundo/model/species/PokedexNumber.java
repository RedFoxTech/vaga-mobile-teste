package br.com.pokemundo.model.species;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class PokedexNumber {

    @SerializedName("entry_number")
    private Long entryNumber;
    @Expose
    private Pokedex pokedex;

    public Long getEntryNumber() {
        return entryNumber;
    }

    public void setEntryNumber(Long entryNumber) {
        this.entryNumber = entryNumber;
    }

    public Pokedex getPokedex() {
        return pokedex;
    }

    public void setPokedex(Pokedex pokedex) {
        this.pokedex = pokedex;
    }

}
