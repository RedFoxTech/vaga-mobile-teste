package com.alzan.pokemon.AllPokeFragment.RecyclerView;

import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.alzan.pokemon.R;

/**
 * Created by Calazans on 07/09/2018.
 */

public class RecyclerHolder extends RecyclerView.ViewHolder {

    ImageView imageView;
    TextView pokeTitle;
    CardView cardView;
    ProgressBar progressBarImage;


    public RecyclerHolder(View itemView) {
        super(itemView);

        imageView = itemView.findViewById(R.id.mainImage);
        pokeTitle = itemView.findViewById(R.id.mainTitle);
        cardView = itemView.findViewById(R.id.cardView);
        progressBarImage = itemView.findViewById(R.id.progressBarImage);
    }
}
