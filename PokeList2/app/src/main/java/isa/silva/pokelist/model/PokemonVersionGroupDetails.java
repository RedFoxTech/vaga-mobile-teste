package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

public class PokemonVersionGroupDetails {
    @SerializedName("level_learned_at")
    private Integer level;
    @SerializedName("move_learn_method")
    private PokemonMoveLearnMethod method;
    @SerializedName("version_group")
    private PokemonVersionGroup group;
}
