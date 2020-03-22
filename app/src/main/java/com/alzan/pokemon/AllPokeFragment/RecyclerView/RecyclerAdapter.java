package com.alzan.pokemon.AllPokeFragment.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import com.alzan.pokemon.PokeDetails.PokeActivity;
import com.alzan.pokemon.R;

import java.util.ArrayList;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.ImageRequest;
import com.android.volley.toolbox.Volley;


/**
 * Created by Calazans on 07/09/2018.
 */

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerHolder> {

    private ArrayList<PokeItems> pokeItems;
    PokeItems items;
    Context context;


    public RecyclerAdapter(Context context, int id, ArrayList objects) {
        this.context = context;
        pokeItems = objects;
    }

    @Override
    public RecyclerHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.poke_list, null);
        RecyclerHolder holder = new RecyclerHolder(view);
        return holder;
    }

    @Override
    public void onBindViewHolder(final RecyclerHolder holder, final int position) {
        items = pokeItems.get(position);

        String firstLetter = items.getName().substring(0, 1).toUpperCase();
        String formattedString = firstLetter + items.getName().substring(1);
        holder.pokeTitle.setText(formattedString);

        final String pokeImageUrl = "https://img.pokemondb.net/artwork/" + items.getName() + ".jpg";

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
                Intent intent = new Intent(context, PokeActivity.class);
                context.startActivity(intent);
                new PokeActivity().setUrl(pokeItems.get(position).getUrl());
                new PokeActivity().setPokeTitle(pokeItems.get(position).getName());
            }
        });

    }

    @Override
    public int getItemCount() {
        return pokeItems.size();
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public int getItemViewType(int position) {
        return position;
    }

}
