package com.example.pokedex;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.pokedex.model.Pokemon;
import com.bumptech.glide.Glide;

public class Detalhes extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhes);

        Pokemon p=(Pokemon) getIntent().getSerializableExtra("pokemon");

        TextView textId=(TextView) findViewById(R.id.txtId);
        textId.setText("#"+p.getNacionalId());

        TextView text=(TextView) findViewById(R.id.txtNomePokemon);
        text.setText(p.getNome());

        TextView textP=(TextView) findViewById(R.id.txtPeso);
        textP.setText("Peso: "+p.getWeight()+"lbs");

        ImageView img=(ImageView) findViewById(R.id.imagemPokemon);
        String url=p.getFoto();
        Glide.with(this).load(url).into(img);
    }

}
