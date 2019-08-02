package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Moves {
    @SerializedName("move")
    private PokemonMove move;

    @SerializedName("version_group_details")
    private List<PokemonVersionGroupDetails> details;

    public PokemonMove getMove() {
        return move;
    }

    public void setMove(PokemonMove move) {
        this.move = move;
    }

    public List<PokemonVersionGroupDetails> getDetails() {
        return details;
    }

    public void setDetails(List<PokemonVersionGroupDetails> details) {
        this.details = details;
    }
}
