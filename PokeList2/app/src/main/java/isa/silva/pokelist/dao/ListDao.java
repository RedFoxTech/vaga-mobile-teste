package isa.silva.pokelist.dao;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import isa.silva.pokelist.dao.db.ClasseDB;
import isa.silva.pokelist.dao.db.DBConstant;
import isa.silva.pokelist.model.Pokemon;

public class ListDao {
    private static ListDao instance;
    private SQLiteDatabase db = null;
    private Context mContext;
    private ClasseDB classeDB;

    /**
     * Construtor de LoginDao
     *
     * @param context
     */
    public ListDao(Context context) {
        super();
        this.mContext = context;

    }

    /**
     * Design Pattern Singleton (Retorna a instancia de LoginDao)
     *
     * @param context
     * @return LoginDao
     */
    public static ListDao getInstance(Context context) {
        if (instance == null) {
            synchronized (ListDao.class) {
                if (instance == null) {
                    instance = new ListDao(context);
                }
            }
        }
        return instance;
    }

    /**
     * Abre conexão com banco de dados
     */
    private void openConnection() {

        try {
            this.classeDB = new ClasseDB(this.mContext);
            db = classeDB.getWritableDatabase();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Fecha conexão com banco de dados
     */
    private void closeConnection() {
        try {
            if (null != db) {
                db.close();
                db = null;
                classeDB.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Apagar todos os registros da tabela Login
     */
    public void deleteAll() {
        try {

            openConnection();
            db.delete(DBConstant.TABLE_LIST, null, null);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
    }

    /**
     * Inserir usuario na tabela Login
     *
     */

    public void insert(Pokemon List) {

        SimpleDateFormat data = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.getDefault());
        String currentDate = data.format(new Date());

        try {
            openConnection();

            ContentValues campos = new ContentValues();
            campos.put(DBConstant.LIST_ID, List.getId());
            campos.put(DBConstant.LIST_NOME, List.getName());
            campos.put(DBConstant.LIST_EXPERIENCIA, List.getExperience());
            campos.put(DBConstant.LIST_HEIGHT, List.getHeight());
            campos.put(DBConstant.LIST_DEFAUT, List.getIs_default());
            campos.put(DBConstant.LIST_ORDER, List.getOrder());
            campos.put(DBConstant.LIST_WEIGHT, List.getWeight());
            campos.put(DBConstant.LIST_ABILITIES, String.valueOf(List.getAbilities()));
            campos.put(DBConstant.LIST_FORMS, String.valueOf(List.getForms()));
            campos.put(DBConstant.LIST_INDICES, String.valueOf(List.getIndices()));
            campos.put(DBConstant.LIST_ITENS, String.valueOf(List.getItens()));
            campos.put(DBConstant.LIST_AREA, List.getArea());
            campos.put(DBConstant.LIST_MOVES, String.valueOf(List.getMoves()));
            campos.put(DBConstant.LIST_SPIRITES, String.valueOf(List.getSprites()));
            campos.put(DBConstant.LIST_SPECIES, String.valueOf(List.getSpecies()));
            campos.put(DBConstant.LIST_STATS, String.valueOf(List.getStats()));
            campos.put(DBConstant.LIST_TYPES, String.valueOf(List.getTypes()));

            try {
                Long row = db.insertOrThrow(DBConstant.TABLE_LIST, DBConstant.DATABASE, campos);
            } catch (Exception e) {
                e.printStackTrace();
            }

        } finally {
            closeConnection();
        }
    }

    /**
     * Apagar determinado login da tabela Login
     *
     * @param id
     */
    public void delete(int id) {

        try {
            openConnection();

            String args[] = new String[]{String.valueOf(id)};
            db.delete(DBConstant.TABLE_LIST, DBConstant.LIST_ID + " = ?", args);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
    }




}
