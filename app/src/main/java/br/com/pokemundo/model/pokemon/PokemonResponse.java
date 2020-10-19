package br.com.pokemundo.model.pokemon;

import com.google.gson.annotations.Expose;

import java.util.List;

public class PokemonResponse {

    @Expose
    private Long count;
    @Expose
    private String next;
    @Expose
    private String previous;
    @Expose
    private List<Pokemon> results;

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public String getNext() {
        return next;
    }

    public void setNext(String next) {
        this.next = next;
    }

    public String getPrevious() {
        return previous;
    }

    public void setPrevious(String previous) {
        this.previous = previous;
    }

    public List<Pokemon> getResults() {
        return results;
    }

    public void setResults(List<Pokemon> results) {
        this.results = results;
    }
}