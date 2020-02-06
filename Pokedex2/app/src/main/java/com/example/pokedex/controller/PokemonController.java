package com.example.pokedex.controller;

import android.widget.Toast;

import com.example.pokedex.service.HttpService;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.concurrent.ExecutionException;

public class PokemonController {

    public String buscarImagem(String nome){
        String resposta="";
        String url="https://pokeapi.co/api/v2/pokemon/"+nome;
        try {
            HttpService serv = new HttpService(url);
            resposta=serv.execute().get();

            JsonParser parser=new JsonParser();
            JsonObject json=(JsonObject) parser.parse(resposta);

            String fotos=json.get("sprites").toString();
            JsonObject imagens=(JsonObject) parser.parse(fotos);

            resposta=imagens.get("front_default").toString();
        }catch (InterruptedException e){
            return "Exceção de Interrupção:"+e.getMessage();
        }catch (ExecutionException e){
            return "Exceção de Execução:"+e.getMessage();
        }

        return resposta;
    }
}
