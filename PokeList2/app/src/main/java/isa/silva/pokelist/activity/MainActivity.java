package isa.silva.pokelist.activity;

import android.app.Activity;
import android.app.ProgressDialog;
import android.os.Bundle;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import isa.silva.pokelist.R;
import isa.silva.pokelist.adapter.PokemonAdapter;
import isa.silva.pokelist.model.Pokemon;
import isa.silva.pokelist.task.ListaTask;
import isa.silva.pokelist.utils.Utils;

public class MainActivity extends AppCompatActivity {

    List<Pokemon> pokemonList = new ArrayList<>();
    RecyclerView recyclerView;



    PokemonAdapter pokemonAdapter;
    Spinner spinner;
    EditText text;
    Button button;
    Pokemon Poke = new Pokemon();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        recyclerView = (RecyclerView) findViewById(R.id.rv_pokemons);
        spinner = (Spinner) findViewById(R.id.Spn_Ordem);
        button = (Button) findViewById(R.id.Btn_busca);
        text = (EditText) findViewById(R.id.Edt_Busca);

        addData();
        pokemonAdapter = new PokemonAdapter(pokemonList);
        RecyclerView.LayoutManager layoutManager;
        layoutManager = new LinearLayoutManager(getApplicationContext());
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        recyclerView.setAdapter(pokemonAdapter);

        button.setOnClickListener(
                new View.OnClickListener() {

                    @Override
                    public void onClick(View view) {
                        hideKeyboard(MainActivity.this);
                        if(text.getText().toString().isEmpty() == false ) {
                            addDataBusca(text.getText().toString().toLowerCase());
                        }else {
                            pokemonList.clear();
                            addData();
                        }

                    }
                });
        final String colors[] = {"Selecione","Crescente","Decrescente"};
        ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>(this,   android.R.layout.simple_spinner_item, colors);
        spinnerArrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(spinnerArrayAdapter);

        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parentView, View selectedItemView, int position, long id) {

                    if (spinner.getSelectedItem() == colors[1]) {

                        pokemonList.clear();
                        addData();
                    } else if (spinner.getSelectedItem() == colors[2]) {

                        pokemonAdapter.notifyDataSetChanged();
                        Collections.reverse(pokemonList);
                    }

            }

            @Override
            public void onNothingSelected(AdapterView<?> parentView) {

            }

        });



    }

    public void addData() {

        for(int i = 1; i <= 50; i++) {

            String id= String.valueOf(i);

            new ListaTask(id) {
                ProgressDialog pd;
                @Override
                protected void onPreExecute() {
                    super.onPreExecute();

                    pd = Utils.createAndShowProgressDialog(MainActivity.this);
                }

                @Override
                protected void onPostExecute(String result) {
                    super.onPostExecute(result);

                    Utils.dismissProgressDialog(pd);

                    if (result != null) {
                        try {
                            Gson serializer = new Gson();

                            Poke = serializer.fromJson(result, Pokemon.class);
                            if (Poke != null) {
                                if (Poke.getId() != null) {
                                    pokemonAdapter.notifyDataSetChanged();
                                }
                            }
                            pokemonList.add(Poke);
                            carregarPoke(pokemonList);

                        } catch (Exception ex) {
                            Utils.showMessage(MainActivity.this, "Aviso", "Sem acesso à internet, tente novamente!");
                        }

                    }
                }

            }.execute();

        }
    }

    public void addDataBusca(String id) {

            new ListaTask(id) {
                ProgressDialog pd;
                @Override
                protected void onPreExecute() {
                    super.onPreExecute();

                    pd = Utils.createAndShowProgressDialog(MainActivity.this);
                }

                @Override
                protected void onPostExecute(String result) {
                    super.onPostExecute(result);

                    Utils.dismissProgressDialog(pd);

                    if (result != null) {
                        try {
                            Gson serializer = new Gson();

                            Poke = serializer.fromJson(result, Pokemon.class);
                            if (Poke != null) {
                                if (Poke.getId() != null) {
                                    pokemonAdapter.notifyDataSetChanged();

                                }
                            }
                            pokemonList.clear();
                            pokemonList.add(Poke);
                            carregarPoke(pokemonList);

                        } catch (Exception ex) {
                            Utils.showMessage(MainActivity.this, "Aviso", "Sem acesso à internet, tente novamente!");
                        }

                    }
                }

            }.execute();


    }

    public void carregarPoke(List<Pokemon> list){
        pokemonAdapter = new PokemonAdapter(list);
        recyclerView.setAdapter(pokemonAdapter);
        pokemonAdapter.notifyDataSetChanged();
    }
    public static void hideKeyboard(Activity activity) {
        InputMethodManager imm = (InputMethodManager) activity.getSystemService(Activity.INPUT_METHOD_SERVICE);
        //Find the currently focused view, so we can grab the correct window token from it.
        View view = activity.getCurrentFocus();
        //If no view currently has focus, create a new one, just so we can grab a window token from it
        if (view == null) {
            view = new View(activity);
        }
        imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
    }
}
