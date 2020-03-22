package com.example.lenovo.pokedex;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.lenovo.pokedex.model.DefaultApiAttributes;
import com.example.lenovo.pokedex.model.PokemonItem;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class PokemonAdapter extends ArrayAdapter<DefaultApiAttributes> {


    TextView txtNome;
    TextView txtId;
    ImageView imgPoke;

    String url;

    String[] pedacos;
    String img;
    int id;
    DefaultApiAttributes pokemon;

    public PokemonAdapter(Context contexto){
        super(contexto, 0, new ArrayList<DefaultApiAttributes>());

    }

    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent){
        View v = convertView;

        if(v == null){
            v = LayoutInflater.from(getContext()).inflate(R.layout.pokemon_item_layout, parent, false);
        }

        pokemon = getItem(position);
        txtNome = v.findViewById(R.id.txtNome);
        imgPoke = v.findViewById(R.id.imgPoke);
        txtId = v.findViewById(R.id.txtId);

        txtNome.setText(pokemon.getName());

        url = pokemon.getUrl();

        pedacos = url.split("/");
        id = Integer.parseInt(pedacos[pedacos.length - 1]);

        txtId.setText("ID: "+id);
        img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";

        Picasso.get().load(img).into(imgPoke);

        return v;
    }
}
