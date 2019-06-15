package com.example.lenovo.pokedex.model;

public class Type {
    private int slot;
    private DefaultApiAttributes type;


    public int getSlot() {
        return slot;
    }

    public void setSlot(int slot) {
        this.slot = slot;
    }


    public DefaultApiAttributes getType() {
        return type;
    }

    public void setType(DefaultApiAttributes type) {
        this.type = type;
    }
}
