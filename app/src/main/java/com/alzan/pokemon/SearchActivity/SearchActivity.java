package com.alzan.pokemon.SearchActivity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.alzan.pokemon.R;
import com.alzan.pokemon.SearchActivity.RecyclerView.RecyclerAdapter;
import com.alzan.pokemon.SearchActivity.RecyclerView.SearchItems;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SearchActivity extends AppCompatActivity {

    static ArrayList<SearchItems> items = new ArrayList<SearchItems>();
    RecyclerView recyclerView;
    RecyclerAdapter recyclerAdapter = null;
    LinearLayoutManager linearLayoutManager;
    static String itemSearch;
    TextView errorText;

    public static String getItemSearch() {
        return itemSearch;
    }

    public static void setItemSearch(String itemSearch) {
        SearchActivity.itemSearch = itemSearch;
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setDisplayShowTitleEnabled(true);

        setTitle("Busca: " + itemSearch);

        errorText = (TextView) findViewById(R.id.errorText);

        recyclerView = (RecyclerView) findViewById(R.id.recyclerView);
        linearLayoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
        recyclerView.setLayoutManager(linearLayoutManager);

        getJSON();
    }


    public void getJSON() {
        String url = "http://alzan.com.br/pokeapi.json";

        RequestQueue queue = Volley.newRequestQueue(this);

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        parseJSON(response);
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        });

        queue.add(stringRequest);
    }

    public void parseJSON(String response) {

        try {
            items.clear();

            JSONObject jsonObject = new JSONObject(response);
            JSONArray jsonArray = jsonObject.getJSONArray("results");

            for (int i = 0; i < jsonArray.length(); i++) {

                SearchItems searchItems = new SearchItems();

                JSONObject object = jsonArray.getJSONObject(i);

                String name = object.isNull("name") ? null : object.getString("name");
                searchItems.setName(name);

                String url = object.isNull("url") ? null : object.getString("url");
                searchItems.setUrl(url);

                if (name.contains(itemSearch)) {
                    items.add(searchItems);
                }
            }

            if (items.size() == 0) {
                errorText.setVisibility(View.VISIBLE);
                errorText.setText("Nenhum pokemon encontrado para a busca: " + itemSearch);
            }

            recyclerAdapter = new RecyclerAdapter(this, R.layout.poke_list, items);
            recyclerView.setAdapter(recyclerAdapter);

        } catch (Exception ex) {
        }
    }
}
