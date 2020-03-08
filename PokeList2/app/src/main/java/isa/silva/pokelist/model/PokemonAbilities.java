package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

public class PokemonAbilities {

    @SerializedName("ability")
    private PokemonAbility ability;

    @SerializedName("is_hidden")
    private Boolean hidden;

    @SerializedName("slot")
    private Integer slot;

    public PokemonAbility getAbility() {
        return ability;
    }

    public void setAbility(PokemonAbility ability) {
        this.ability = ability;
    }

    public Boolean getHidden() {
        return hidden;
    }

    public void setHidden(Boolean hidden) {
        this.hidden = hidden;
    }

    public Integer getSlot() {
        return slot;
    }

    public void setSlot(Integer slot) {
        this.slot = slot;
    }
}
