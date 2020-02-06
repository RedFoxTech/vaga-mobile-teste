package com.example.pokedex.service;

import android.os.AsyncTask;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

public class HttpService extends AsyncTask<Void,Void,String> {
    private String name;

    public HttpService(String name){
        this.name=name;
    }

    @Override
    protected String doInBackground(Void... voids){
        StringBuilder response=new StringBuilder();
        try{
            URL url = new URL(name);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("content-type", "application/json");
            connection.setRequestProperty("Accept", "application/json");
            connection.setDoOutput(true);
            connection.setConnectTimeout(5000);
            connection.connect();

            Scanner in=new Scanner(url.openStream());

            while (in.hasNextLine()){
                response.append(in.next());
            }

        }catch(MalformedURLException e){
            e.printStackTrace();
        }catch (IOException e){
            e.printStackTrace();
        }

        return response.toString();
    }

}
