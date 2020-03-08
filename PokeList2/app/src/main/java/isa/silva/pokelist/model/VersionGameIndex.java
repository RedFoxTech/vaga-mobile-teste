package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

public class VersionGameIndex {
    @SerializedName("game_index")
    private Integer game_index;

    @SerializedName("version")
    private PokemonGameVersion version;
}
