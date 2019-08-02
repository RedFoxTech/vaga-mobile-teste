package isa.silva.pokelist.model;

public class Pokemons {
    private String name;
    private String type;
    private int NPokestop;

    public Pokemons() {

    }
    public Pokemons(String name, String type, int NPokestop) {
        this.name = name;
        this.type = type;
        this.NPokestop = NPokestop;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getNPokestop() {
        return NPokestop;
    }

    public void setNPokestop(int NPokestop) {
        this.NPokestop = NPokestop;
    }
}
