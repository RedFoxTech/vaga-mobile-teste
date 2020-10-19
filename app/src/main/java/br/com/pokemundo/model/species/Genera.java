package br.com.pokemundo.model.species;

import com.google.gson.annotations.Expose;

public class Genera {

    @Expose
    private String genus;
    @Expose
    private Language language;

    public String getGenus() {
        return genus;
    }

    public void setGenus(String genus) {
        this.genus = genus;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

}
