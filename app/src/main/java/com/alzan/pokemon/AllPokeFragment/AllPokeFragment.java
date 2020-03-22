package com.alzan.pokemon.AllPokeFragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.alzan.pokemon.AllPokeFragment.RecyclerView.PokeItems;
import com.alzan.pokemon.AllPokeFragment.RecyclerView.RecyclerAdapter;
import com.alzan.pokemon.R;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class AllPokeFragment extends Fragment {

    static ArrayList<PokeItems> items = new ArrayList<PokeItems>();
    RecyclerView recyclerView;
    RecyclerAdapter recyclerAdapter = null;
    LinearLayoutManager linearLayoutManager;
    ProgressBar progressBar;
    TextView errorText;
    private boolean loading = true;
    String url = "https://pokeapi.co/api/v2/pokemon/?limit=1000";


    int currentItems, totalItems, pastItems;

    int control;


    public static AllPokeFragment newInstance() {
        AllPokeFragment fragment = new AllPokeFragment();
        return fragment;
    }

    View view;

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_all_poke, container, false);
        super.onCreate(savedInstanceState);


        recyclerView = (RecyclerView) view.findViewById(R.id.recyclerView);
        linearLayoutManager = new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false);
        recyclerView.setLayoutManager(linearLayoutManager);
        progressBar = (ProgressBar) view.findViewById(R.id.progressBar);
        errorText = (TextView) view.findViewById(R.id.errorText);

        try {
            String name = getArguments().getString("name");
            String urlBundle = getArguments().getString("url");

            if (name != null && urlBundle != null) {
                getDataJsonByType(urlBundle, 1);
                url = urlBundle;
                control = 1;
            } else {
                control = 0;
                getJSON(url, control);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        getJSON(url, control);

        return view;

    }


    public void getJSON(final String url, final int control) {

        RequestQueue queue = Volley.newRequestQueue(getActivity());

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        if (control == 1) {
                            getDataJsonByType(response, control);

                        } else if (control == 0) {
                            getDataJson(response, control);

                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
                progressBar.setVisibility(View.GONE);
                errorText.setVisibility(View.VISIBLE);
                errorText.setText(error.getCause().toString());
            }
        });

        RetryPolicy retryPolicy = new DefaultRetryPolicy(30000, DefaultRetryPolicy.DEFAULT_MAX_RETRIES, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT);
        stringRequest.setRetryPolicy(retryPolicy);

        queue.add(stringRequest);
    }

    public void getDataJson(String response, int control) {

        try {
            JSONObject jsonObject = new JSONObject(response);
            JSONArray jsonArray = jsonObject.getJSONArray("results");

            items.clear();

            for (int i = 0; i < jsonArray.length(); i++) {

                final PokeItems pokeItems = new PokeItems();

                JSONObject object = jsonArray.getJSONObject(i);

                String name = object.isNull("name") ? null : object.getString("name");
                pokeItems.setName(name);

                String url = object.isNull("url") ? null : object.getString("url");
                pokeItems.setUrl(url);

                items.add(pokeItems);
            }

            progressBar.setVisibility(View.GONE);
            recyclerView.setVisibility(View.VISIBLE);

            recyclerAdapter = new RecyclerAdapter(getActivity(), R.layout.poke_list, items);
            recyclerView.setAdapter(recyclerAdapter);

        } catch (Exception ex) {
        }
    }

    public void getDataJsonByType(String response, int control) {

        try {
            items.clear();

            JSONObject jsonObject = new JSONObject(response);
            JSONArray jsonArray = jsonObject.getJSONArray("pokemon");

            for (int i = 0; i < jsonArray.length(); i++) {

                final PokeItems pokeItems = new PokeItems();

                JSONObject object = jsonArray.getJSONObject(i);

                JSONObject pokemon = object.getJSONObject("pokemon");

                String name = pokemon.isNull("name") ? null : pokemon.getString("name");
                pokeItems.setName(name);

                String url = pokemon.isNull("url") ? null : pokemon.getString("url");
                pokeItems.setUrl(url);

                items.add(pokeItems);

            }

            progressBar.setVisibility(View.GONE);
            recyclerView.setVisibility(View.VISIBLE);

            recyclerAdapter = new RecyclerAdapter(getActivity(), R.layout.poke_list, items);
            recyclerView.setAdapter(recyclerAdapter);

        } catch (Exception ex) {
        }
    }
}
