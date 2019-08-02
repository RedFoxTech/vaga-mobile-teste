package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

public class Stats {

    @SerializedName("stat")
    private PokemonStat stat;

    @SerializedName("effort")
    private Integer effort;

    @SerializedName("base_stat")
    private Integer base_stat;
}
