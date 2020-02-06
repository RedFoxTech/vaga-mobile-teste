package com.example.pokedex.model;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Pokemon implements Serializable {
    @SerializedName("name")
    private String name;
    @SerializedName("id")
    private int id;
    @SerializedName("sprite")
    private String sprite;
    @SerializedName("weight")
    private String weight;

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getNome(){
        return this.name;
    }

    public int getNacionalId(){
        return this.id;
    }

    public String getFoto(){
        return this.sprite;
    }
    public void setFoto(String foto){
        this.sprite=foto;
    }

    public void setNome(String nome){
        this.name=nome;
    }

    public void setNacionalId(int nacionalId){
        this.id=nacionalId;
    }




}
