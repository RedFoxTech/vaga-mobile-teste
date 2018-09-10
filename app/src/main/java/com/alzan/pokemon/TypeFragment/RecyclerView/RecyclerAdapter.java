package com.alzan.pokemon.TypeFragment.RecyclerView;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.alzan.pokemon.AllPokeFragment.AllPokeFragment;
import com.alzan.pokemon.MainActivity.MainActivity;
import com.alzan.pokemon.PokeDetails.PokeActivity;
import com.alzan.pokemon.R;
import com.alzan.pokemon.TypeFragment.TypeFragment;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.ImageRequest;
import com.android.volley.toolbox.Volley;

import java.lang.reflect.Type;
import java.util.ArrayList;


/**
 * Created by Calazans on 07/09/2018.
 */

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerHolder> {

    private ArrayList<TypeItems> typeItems;
    TypeItems items;
    Context context;
    Fragment fragment;
    Activity activity;


    public RecyclerAdapter(Context context, int id, ArrayList objects, Fragment fragment, Activity activity) {
        this.context = context;
        typeItems = objects;
        this.fragment = fragment;
        this.activity = activity;
    }

    @Override
    public RecyclerHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.type_list, null);
        RecyclerHolder holder = new RecyclerHolder(view);
        return holder;
    }

    @Override
    public void onBindViewHolder(final RecyclerHolder holder, final int position) {
        items = typeItems.get(position);

        String firstLetter = items.getName().substring(0, 1).toUpperCase();
        String formattedString = firstLetter + items.getName().substring(1);
        holder.pokeTitle.setText(formattedString);

        String pokeImageUrl = "https://img.pokemondb.net/artwork/" + items.getImage() + ".jpg";

        try {

            ImageRequest imageRequest = new ImageRequest(pokeImageUrl, new Response.Listener<Bitmap>() {
                @Override
                public void onResponse(final Bitmap response) {
                    holder.imageView.setImageBitmap(response);
                    holder.progressBarImage.setVisibility(View.GONE);
                }
            }, 0, 0, ImageView.ScaleType.CENTER_INSIDE, null, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    error.printStackTrace();
                }
            });

            RequestQueue requestQueue = Volley.newRequestQueue(context);
            requestQueue.add(imageRequest);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        holder.cardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Fragment fragment = new AllPokeFragment();

                Bundle bundle = new Bundle();
                bundle.putString("name", typeItems.get(position).getName());
                bundle.putString("url", typeItems.get(position).getUrl());


                FragmentManager fragmentManager = ((FragmentActivity) context).getSupportFragmentManager();
                FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
                fragmentTransaction.replace(R.id.content, fragment);
                fragmentTransaction.addToBackStack(null);
                fragment.setArguments(bundle);
                fragmentTransaction.commit();

                String firstLetter = typeItems.get(position).getName().substring(0, 1).toUpperCase();
                String formattedString = firstLetter + typeItems.get(position).getName().substring(1);
                activity.setTitle("Tipo: " + formattedString);
            }
        });

    }

    @Override
    public int getItemViewType(int position) {
        return position;
    }

    @Override
    public int getItemCount() {
        return typeItems.size();
    }

    @Override
    public long getItemId(int position) {
        return position;
    }
}
