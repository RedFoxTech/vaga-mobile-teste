package br.com.pokemundo.model.pokemon;

import android.os.Parcel;
import android.os.Parcelable;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import com.google.gson.annotations.Expose;

import static br.com.pokemundo.util.AppUtil.getIntUrlPokemon;

@Entity(tableName = "pokemon")
public class Pokemon implements Parcelable {
    @PrimaryKey
    @NonNull
    private Long id;
    @Expose
    private String name;
    @Expose
    private String url;

    public Pokemon() {
    }

    protected Pokemon(Parcel in) {
        if (in.readByte() == 0) {
            id = null;
        } else {
            id = in.readLong();
        }
        name = in.readString();
        url = in.readString();
    }

    public Pokemon(@NonNull Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public static final Creator<Pokemon> CREATOR = new Creator<Pokemon>() {
        @Override
        public Pokemon createFromParcel(Parcel in) {
            return new Pokemon(in);
        }

        @Override
        public Pokemon[] newArray(int size) {
            return new Pokemon[size];
        }
    };


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getId() {
        return getIntUrlPokemon(this.getUrl());
    }

    public void setId(@NonNull Long id) {
        this.id = id;//getIntUrlPokemon(this.getUrl());
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        if (id == null) {
            dest.writeByte((byte) 0);
        } else {
            dest.writeByte((byte) 1);
            dest.writeLong(id);
        }
        dest.writeString(name);
        dest.writeString(url);
    }
}
