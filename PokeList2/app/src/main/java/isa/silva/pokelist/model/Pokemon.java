package isa.silva.pokelist.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Pokemon {


    @SerializedName("abilities")
    private List<PokemonAbilities> abilities;

    @SerializedName("base_experience")
    private Integer experience;

    @SerializedName("forms")
    private List<PokemonForm> forms;

    @SerializedName("game_indices")
    private List<VersionGameIndex> indices;

    @SerializedName("height")
    private Integer height;

    @SerializedName("held_itens")
    private List<VersionGameIndex> itens;

    @SerializedName("id")
    private Integer id;

    @SerializedName("is_default")
    private Boolean is_default;

    @SerializedName("location_area_encounters")
    private String area;


    @SerializedName("moves")
    private List<Moves> moves;

    @SerializedName("name")
    private String name;

    @SerializedName("order")
    private Integer order;

    @SerializedName("species")
    private Species species;

    @SerializedName("sprites")
    private Sprite sprites;

    @SerializedName("stats")
    private List<Stats> stats;

    @SerializedName("types")
    private List<Types> types;

    @SerializedName("weight")
    private Integer weight;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Boolean getIs_default() {
        return is_default;
    }

    public void setIs_default(Boolean is_default) {
        this.is_default = is_default;
    }

    public Integer getOrder() {
        return order;
    }


    public void setOrder(Integer order) {
        this.order = order;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public List<PokemonAbilities> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<PokemonAbilities> abilities) {
        this.abilities = abilities;
    }

    public List<PokemonForm> getForms() {
        return forms;
    }

    public void setForms(List<PokemonForm> forms) {
        this.forms = forms;
    }

    public List<VersionGameIndex> getIndices() {
        return indices;
    }

    public void setIndices(List<VersionGameIndex> indices) {
        this.indices = indices;
    }

    public List<VersionGameIndex> getItens() {
        return itens;
    }

    public void setItens(List<VersionGameIndex> itens) {
        this.itens = itens;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public List<Moves> getMoves() {
        return moves;
    }

    public void setMoves(List<Moves> moves) {
        this.moves = moves;
    }

    public Sprite getSprites() {
        return sprites;
    }

    public void setSprites(Sprite sprites) {
        this.sprites = sprites;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public List<Stats> getStats() {
        return stats;
    }

    public void setStats(List<Stats> stats) {
        this.stats = stats;
    }

    public List<Types> getTypes() {
        return types;
    }

    public void setTypes(List<Types> types) {
        this.types = types;
    }




}
