package br.com.pokemundo.data.database;

import androidx.room.TypeConverter;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

import br.com.pokemundo.model.species.Color;
import br.com.pokemundo.model.species.EggGroup;
import br.com.pokemundo.model.species.EvolutionChain;
import br.com.pokemundo.model.species.FlavorTextEntry;
import br.com.pokemundo.model.species.Genera;
import br.com.pokemundo.model.species.Generation;
import br.com.pokemundo.model.species.GrowthRate;
import br.com.pokemundo.model.species.Habitat;
import br.com.pokemundo.model.species.Name;
import br.com.pokemundo.model.species.PalParkEncounter;
import br.com.pokemundo.model.species.PokedexNumber;
import br.com.pokemundo.model.species.Shape;
import br.com.pokemundo.model.species.Variety;

public class Converters {
    @TypeConverter
    public Date toDate(Long timestamp) {
        if (timestamp == null) {
            return null;
        } else {
            return new Date(timestamp);
        }
    }

    @TypeConverter
    public Long toTimestamp(Date date) {
        return date.getTime();
    }

    //Type converter para lista de String
    @TypeConverter
    public List<String> fromString(String value) {
        Type listType = (Type) new TypeToken<List<String>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    //Color
    @TypeConverter
    public Color fromColor(String value) {
        Type listType = (Type) new TypeToken<Color>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromColor(Color o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }

    //List EggGroup
    @TypeConverter
    public List<EggGroup> fromListEggGroup(String value) {
        Type listType = (Type) new TypeToken<List<EggGroup>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListEggGroup(List<EggGroup> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }


    //EvolutionChain
    @TypeConverter
    public EvolutionChain fromEvolutionChain(String value) {
        Type listType = (Type) new TypeToken<EvolutionChain>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromEvolutionChain(EvolutionChain o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }

    //List<FlavorTextEntry>
    @TypeConverter
    public List<FlavorTextEntry> fromListFlavorTextEntry(String value) {
        Type listType = (Type) new TypeToken<List<FlavorTextEntry>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListFlavorTextEntry(List<FlavorTextEntry> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }

    // List<Genera>
    @TypeConverter
    public List<Genera> fromListGenera(String value) {
        Type listType = (Type) new TypeToken<List<Genera>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListGenera(List<Genera> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }

    //Generation
    @TypeConverter
    public Generation fromGeneration(String value) {
        Type listType = (Type) new TypeToken<Generation>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromGeneration(Generation o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }

    //GrowthRate
    @TypeConverter
    public GrowthRate fromGrowthRate(String value) {
        Type listType = (Type) new TypeToken<GrowthRate>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromGrowthRate(GrowthRate o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }


    //Habitat
    @TypeConverter
    public Habitat fromHabitat(String value) {
        Type listType = (Type) new TypeToken<Habitat>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromHabitat(Habitat o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }

    //List<Name>
    @TypeConverter
    public List<Name> fromListName(String value) {
        Type listType = (Type) new TypeToken<List<Name>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListName(List<Name> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }


    //List<Variety>
    @TypeConverter
    public List<Variety> fromListVariety(String value) {
        Type listType = (Type) new TypeToken<List<Variety>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListVariety(List<Variety> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }


    //Shape
    @TypeConverter
    public Shape fromShape(String value) {
        Type listType = (Type) new TypeToken<Shape>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromShape(Shape o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }


    //List<PokedexNumber>
    @TypeConverter
    public List<PokedexNumber> fromListPokedexNumber(String value) {
        Type listType = (Type) new TypeToken<List<PokedexNumber>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListPokedexNumber(List<PokedexNumber> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }

    //List<PalParkEncounter>
    @TypeConverter
    public List<PalParkEncounter> fromListPalParkEncounter(String value) {
        Type listType = (Type) new TypeToken<List<PalParkEncounter>>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromListPalParkEncounterr(List<PalParkEncounter> l) {
        Gson gson = new Gson();
        return gson.toJson(l);
    }


    //Object
    @TypeConverter
    public Object fromObject(String value) {
        Type listType = (Type) new TypeToken<Object>() {
        }.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public String fromObject(Object o) {
        Gson gson = new Gson();
        return gson.toJson(o);
    }


}
