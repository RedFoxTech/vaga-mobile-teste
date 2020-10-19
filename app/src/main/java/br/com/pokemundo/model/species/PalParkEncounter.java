package br.com.pokemundo.model.species;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class PalParkEncounter {

    @Expose
    private Area area;
    @SerializedName("base_score")
    private Long baseScore;
    @Expose
    private Long rate;

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Long getBaseScore() {
        return baseScore;
    }

    public void setBaseScore(Long baseScore) {
        this.baseScore = baseScore;
    }

    public Long getRate() {
        return rate;
    }

    public void setRate(Long rate) {
        this.rate = rate;
    }

}
