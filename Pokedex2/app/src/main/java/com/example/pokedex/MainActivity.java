package com.example.pokedex;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.SearchView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.pokedex.controller.PokemonController;
import com.example.pokedex.model.Pokemon;
import com.example.pokedex.model.PokemonLista;
import com.example.pokedex.service.HttpService;
import com.example.pokedex.model.Pokemon;
import com.google.gson.*;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class MainActivity extends AppCompatActivity implements SearchView.OnQueryTextListener{
    protected String urlApi="https://pokeapi.co/api/v2/pokemon/";
    protected int vl=20;
    protected  int limit=20;
    protected int pagina=0;

    ListView lista;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        lista=(ListView) findViewById(R.id.lista);
        ListarPokemons(urlApi);


        SearchView editsearch=(SearchView) findViewById(R.id.txtbusca);
        editsearch.setOnQueryTextListener(this);

       lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
           @Override
           public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
              int intPos=i;
              String itemValue=(String) lista.getItemAtPosition(intPos);
              exibirPokemon(itemValue);
           }
       });
    }

    //----------------------------------Exibição------------------------------
    protected void ListarPokemons(String url){

        ArrayList<String> pokemons=new ArrayList<String>();

        String resposta=buscar(url);

        List<PokemonLista> pokemo=new ArrayList<PokemonLista>();
        try {
            Gson gson=new GsonBuilder().create();

            JsonParser parser=new JsonParser();
            JsonObject json=(JsonObject) parser.parse(resposta);

            String j=json.get("results").toString();

            Type listType=new TypeToken<List<PokemonLista>>(){}.getType();
            pokemo=gson.fromJson(j,listType);


            for(int i=0;i<pokemo.size();i++){
                PokemonLista pk;
                pk=pokemo.get(i);
                pokemons.add(pk.getName());
            }

            ArrayAdapter<String> adapter=new ArrayAdapter<String>(getApplicationContext(),android.R.layout.simple_expandable_list_item_1,pokemons);
            lista.setAdapter(adapter);
            resposta="";

        }catch (Exception e){
            Toast.makeText(this,"Json Error:"+e.getMessage(),Toast.LENGTH_LONG).show();
        }




    }

    protected void exibirPokemon(String pokemon){
        pokemon=pokemon.toLowerCase();
        String link=urlApi+pokemon;
        String resposta=buscar(link);
        PokemonController ctrl=new PokemonController();
        try {
            Pokemon pk;
            Gson gson = new Gson();
            pk = gson.fromJson(resposta, Pokemon.class);
            pk.setFoto(ctrl.buscarImagem(pk.getNome()));

            Intent in=new Intent(this,Detalhes.class);
            in.putExtra("pokemon",pk);
            startActivity(in);

        }catch (Exception e){
            Toast.makeText(this,"Pokémon não Encontrado",Toast.LENGTH_LONG).show();
        }
    }

    public String buscar(String url){
        String resposta="";

        try {
            HttpService serv = new HttpService(url);
            resposta=serv.execute().get();
        }catch (InterruptedException e){
            return "Exceção de Interrupção:"+e.getMessage();
        }catch (ExecutionException e){
            return "Exceção de Execução:"+e.getMessage();
        }

        return resposta;
    }

    //-------------------------------Botoes--------------------------------
    public void voltar(View view) {
        if(this.pagina>0) {
            this.pagina-= vl;
            String next="https://pokeapi.co/api/v2/pokemon/?offset="+pagina+"&limit="+limit;
            ListarPokemons(next);
        }
    }

    public void avancar(View view) {
        this.pagina+=vl;
        String next="https://pokeapi.co/api/v2/pokemon/?offset="+pagina+"&limit="+limit;
        ListarPokemons(next);
    }

    //----------------------------------Listener------------------------------
    @Override
    public boolean onQueryTextSubmit(String s){
        exibirPokemon(s);
        return true;
    }

    @Override
    public boolean onQueryTextChange(String s) {
        return false;
    }

    @Override
    public void onPointerCaptureChanged(boolean hasCapture) {

    }
}
