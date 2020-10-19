package br.com.pokemundo.model.species;

import com.google.gson.annotations.Expose;

public class Name {

    @Expose
    private Language language;
    @Expose
    private String name;

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
