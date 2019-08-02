package isa.silva.pokelist.task;

import android.os.AsyncTask;
import android.util.Log;

import org.json.JSONObject;

import isa.silva.pokelist.utils.Constants;
import isa.silva.pokelist.utils.HttpUtil;

public class ListaTask extends AsyncTask<Void, Void, String> {

    private String Id;


    public ListaTask(String id) {
        Id = id;
    }

    @Override
    protected String doInBackground(Void... params) {

        String url = Constants.URL_WEBSERVICE + "v2/pokemon/"+Id+"/";

        JSONObject json = new JSONObject();
        try{

            String result =  HttpUtil.getExecute(url);
            return result;

        }catch (Exception e){
            Log.e("ERROR", e.getMessage());
            return null;
        }
    }
}