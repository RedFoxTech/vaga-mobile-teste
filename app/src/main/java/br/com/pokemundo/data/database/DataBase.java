package br.com.pokemundo.data.database;

import android.content.Context;

import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverters;

import br.com.pokemundo.data.database.dao.PokemonDao;
import br.com.pokemundo.data.database.dao.SpecieDao;
import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.model.species.Specie;

@androidx.room.Database(entities = {Pokemon.class, Specie.class}, version = 1, exportSchema = false)
@TypeConverters(Converters.class)
public abstract class DataBase extends RoomDatabase {
    private static volatile DataBase INSTANCE;

    public static DataBase getDatabase(Context context) {
        if (INSTANCE == null) {
            synchronized (DataBase.class) {
                if (INSTANCE == null) {
                    INSTANCE = Room.databaseBuilder(context, DataBase.class, "my_db")
                            .fallbackToDestructiveMigration()
                            .build();
                }
            }
        }
        return INSTANCE;
    }

    public abstract PokemonDao pokemonDao();

    public abstract SpecieDao specieDao();
}
