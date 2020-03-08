package isa.silva.pokelist.dao.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import isa.silva.pokelist.dao.ListDao;

public class ClasseDB extends SQLiteOpenHelper {

	private Context mContext;
	private static String TAG = "ClasseDB";
	private static ClasseDB mInstance = null;

	public ClasseDB(Context context) {
		super(context, DBConstant.DATABASE, null, DBConstant.DATABASE_VERSION);
        mContext = context;
	}
	
	public static synchronized ClasseDB getInstance(Context context) {
		if (mInstance == null) {
			mInstance = new ClasseDB(context.getApplicationContext());
		}
		return mInstance;
	}
	
	@Override
	public void onCreate(SQLiteDatabase database) {
		
    	try {

    		String[] TABELAS = DBConstant.CREATE_TABLES();
			for (String TABELA : TABELAS) {
				database.execSQL(TABELA);
			}
    		
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
		
	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		if (newVersion > oldVersion){
			deleteDatabase();
		}

	}

    public void deleteDatabase() {
        try {
            mContext.deleteDatabase(DBConstant.DATABASE);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void clearAllTablesAndConfiguration(){
        ListDao.getInstance(mContext).deleteAll();
    }
}
