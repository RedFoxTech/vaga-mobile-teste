package br.com.pokemundo.data.database.dao;

import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

import br.com.pokemundo.model.species.Specie;
import io.reactivex.Flowable;

@Dao
public interface SpecieDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(Specie specie);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertAll(List<Specie> species);

    @Update
    void update(Specie specie);


    @Query("SELECT * FROM specie")
    List<Specie> getAll();

    @Query("SELECT * FROM  specie")
    Flowable<List<Specie>> getAllRxJava();

    @Query("SELECT * FROM specie WHERE id = :id")
    Specie getForId(int id);

    @Query("SELECT * FROM  specie WHERE id = :id")
    Flowable<Specie> getIdRxJava(int id);

}