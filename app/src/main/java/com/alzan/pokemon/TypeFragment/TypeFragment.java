package com.alzan.pokemon.TypeFragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.alzan.pokemon.AllPokeFragment.RecyclerView.PokeItems;
import com.alzan.pokemon.R;
import com.alzan.pokemon.TypeFragment.RecyclerView.TypeItems;
import com.alzan.pokemon.TypeFragment.RecyclerView.RecyclerAdapter;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.reflect.Type;
import java.util.ArrayList;

public class TypeFragment extends Fragment {

    static ArrayList<TypeItems> items = new ArrayList<TypeItems>();
    RecyclerView recyclerView;
    RecyclerAdapter recyclerAdapter = null;
    ProgressBar progressBar;
    TextView errorText;
    private boolean loading = true;


    int currentItems, totalItems, pastItems;

    int control = 0, end = 10;

    public static TypeFragment newInstance() {
        TypeFragment fragment = new TypeFragment();
        return fragment;
    }

    View view;

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_type, container, false);
        super.onCreate(savedInstanceState);

        getActivity().setTitle("Tipos");

        recyclerView = (RecyclerView) view.findViewById(R.id.recyclerView);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false);
        recyclerView.setLayoutManager(linearLayoutManager);
        progressBar = (ProgressBar) view.findViewById(R.id.progressBar);

        errorText = (TextView) view.findViewById(R.id.errorText);

        getJSON(control, end);

        return view;

    }

    RequestQueue queue;

    public void getJSON(final int start, final int end) {
        String url = "https://pokeapi.co/api/v2/type/";

        queue = Volley.newRequestQueue(getActivity());

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        getDataJson(response, start, end);
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
                progressBar.setVisibility(View.GONE);
                errorText.setVisibility(View.VISIBLE);
                errorText.setText(error.toString());
            }
        });

        queue.add(stringRequest);
    }

    @Override
    public void onStop() {
        super.onStop();
        if (queue != null) {
            queue.cancelAll(this);
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        if (queue != null) {
            queue.cancelAll(this);
        }
    }


    public void getDataJson(String response, int start, int end) {

        try {
            JSONObject jsonObject = new JSONObject(response);
            JSONArray jsonArray = jsonObject.getJSONArray("results");

            items.clear();

            for (int i = 0; i < jsonArray.length() - 2; i++) {
                final TypeItems typeItems = new TypeItems();

                JSONObject object = jsonArray.getJSONObject(i);

                String name = object.isNull("name") ? null : object.getString("name");
                typeItems.setName(name);

                String url = object.isNull("url") ? null : object.getString("url");
                typeItems.setUrl(url);

                try {

                    RequestQueue queue = Volley.newRequestQueue(getActivity());

                    StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                            new Response.Listener<String>() {
                                @Override
                                public void onResponse(String response) {
                                    try {
                                        JSONObject jsonObject = new JSONObject(response);
                                        JSONArray jsonArray = jsonObject.getJSONArray("pokemon");

                                        for (int i = 0; i < 1; i++) {

                                            JSONObject object = jsonArray.getJSONObject(i);

                                            JSONObject pokemon = object.getJSONObject("pokemon");

                                            String name = pokemon.isNull("name") ? null : pokemon.getString("name");
                                            typeItems.setImage(name);

                                        }
                                    } catch (Exception ex) {
                                    }
                                }
                            }, new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            error.printStackTrace();
                        }
                    });

                    queue.add(stringRequest);
                } catch (Exception ex) {
                }
                items.add(typeItems);
            }


            progressBar.setVisibility(View.GONE);
            recyclerView.setVisibility(View.VISIBLE);

            recyclerAdapter = new RecyclerAdapter(getActivity(), R.layout.poke_list, items, TypeFragment.newInstance(), getActivity());
            recyclerView.setAdapter(recyclerAdapter);

        } catch (Exception ex) {
        }
    }
}
