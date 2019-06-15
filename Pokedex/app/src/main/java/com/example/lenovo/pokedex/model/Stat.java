package com.example.lenovo.pokedex.model;

public class Stat {


    private int effort;
    private String base_stat;
    private DefaultApiAttributes stat;


    public int getEffort() {
        return effort;
    }

    public void setEffort(int id) {
        this.effort = id;
    }

    public String getBase_stat() {
        return base_stat;
    }

    public void setBase_stat(String base_stat) {
        this.base_stat = base_stat;
    }

    public DefaultApiAttributes getStat() {
        return stat;
    }

    public void setStat(DefaultApiAttributes stat) {
        this.stat = stat;
    }
}
