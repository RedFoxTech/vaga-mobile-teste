package isa.silva.pokelist.dao.db;

public class DBConstant {
    public static final String DATABASE = "POKEMONLISTA";
    public static final int DATABASE_VERSION = 1;


    //TABELA
    public static final String TABLE_LIST = "List";
    //CAMPOS
    public static final String LIST_NOME = "Nome";
    public static final String LIST_ID = "Id";
    public static final String LIST_EXPERIENCIA = "EXPERIENCIA";
    public static final String LIST_HEIGHT = "Height";
    public static final String LIST_DEFAUT = "Default";
    public static final String LIST_ORDER = "Order";
    public static final String LIST_WEIGHT = "Weight";
    public static final String LIST_ABILITIES = "Abilities";
    public static final String LIST_FORMS = "Forms";
    public static final String LIST_INDICES = "Indices";
    public static final String LIST_ITENS = "Itens";
    public static final String LIST_AREA = "Area";
    public static final String LIST_MOVES = "Moves";
    public static final String LIST_SPIRITES = "Sprites";
    public static final String LIST_SPECIES = "Species";
    public static final String LIST_STATS = "Stats";
    public static final String LIST_TYPES = "Types";

    //QUERY CREATE
    private static final String CREATE_LIST ="CREATE TABLE "
            + TABLE_LIST + "(" +
            LIST_ID + " int, " +
            LIST_NOME + " text, " +
            LIST_EXPERIENCIA + " int, " +
            LIST_HEIGHT + " int, " +
            LIST_DEFAUT + " int, " +
            LIST_ORDER + " int, " +
            LIST_WEIGHT + " int, " +
            LIST_ABILITIES + " text, " +
            LIST_FORMS + " text, " +
            LIST_INDICES + " text, " +
            LIST_ITENS + " text, " +
            LIST_AREA + " text, " +
            LIST_MOVES + " text, " +
            LIST_SPIRITES + " text, " +
            LIST_SPECIES + " text, " +
            LIST_STATS + " text, " +
            LIST_TYPES + " text);";


    //ARRAY COLUNAS
    public static final String LIST_COLS[] = {
            LIST_ID,
            LIST_NOME,
            LIST_EXPERIENCIA,
            LIST_HEIGHT,
            LIST_DEFAUT,
            LIST_ORDER,
            LIST_WEIGHT,
            LIST_ABILITIES,
            LIST_FORMS,
            LIST_INDICES,
            LIST_ITENS,
            LIST_AREA,
            LIST_MOVES,
            LIST_SPIRITES,
            LIST_SPECIES,
            LIST_STATS,
            LIST_TYPES

    };


    public static String[] CREATE_TABLES() {
        return new String[]{

                CREATE_LIST
        };
    }

    public static String[] TABLES() {
        return new String[]{

                TABLE_LIST
        };
    }
}
