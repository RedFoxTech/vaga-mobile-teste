package com.alzan.pokemon.PokeDetails;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.alzan.pokemon.R;
import com.alzan.pokemon.TypeFragment.RecyclerView.RecyclerAdapter;
import com.alzan.pokemon.TypeFragment.RecyclerView.TypeItems;
import com.alzan.pokemon.TypeFragment.TypeFragment;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.ImageRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONObject;

import java.text.DecimalFormat;

public class PokeActivity extends AppCompatActivity {

    static String url;
    static String pokeTitle;


    public static String getUrl() {
        return url;
    }

    public static void setUrl(String url) {
        PokeActivity.url = url;
    }

    public static String getPokeTitle() {
        return pokeTitle;
    }

    public static void setPokeTitle(String pokeTitle) {
        PokeActivity.pokeTitle = pokeTitle;
    }

    TextView weight;
    TextView height;
    TextView type01, type02;

    TextView hp, speed, attack, defense, special_attack, special_defense;


    ProgressBar progressBarMain;
    ProgressBar progressBarMainImage;

    LinearLayout linear_layout_main;

    ImageView mainImage;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_poke);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setDisplayShowTitleEnabled(true);


        String firstLetter = pokeTitle.substring(0, 1).toUpperCase();
        String formattedTitle = firstLetter + pokeTitle.substring(1);
        setTitle(formattedTitle);


        weight = (TextView) findViewById(R.id.weight);
        height = (TextView) findViewById(R.id.height);
        type01 = (TextView) findViewById(R.id.type01);
        type02 = (TextView) findViewById(R.id.type02);
        mainImage = (ImageView) findViewById(R.id.mainImage);
        progressBarMainImage = (ProgressBar) findViewById(R.id.progressBarMainImage);
        progressBarMain = (ProgressBar) findViewById(R.id.progressBarMain);
        linear_layout_main = (LinearLayout) findViewById(R.id.linear_layout_main);

        hp = (TextView) findViewById(R.id.hp);
        speed = (TextView) findViewById(R.id.speed);
        attack = (TextView) findViewById(R.id.attack);
        defense = (TextView) findViewById(R.id.defense);
        special_attack = (TextView) findViewById(R.id.special_attack);
        special_defense = (TextView) findViewById(R.id.special_defense);

        getJSON(url);

    }

    public void getJSON(String url) {
        RequestQueue queue = Volley.newRequestQueue(this);

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        getDataJson(response);
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
//                progressBar.setVisibility(View.GONE);
//                errorText.setVisibility(View.VISIBLE);
//                errorText.setText(error.toString());
            }
        });

        queue.add(stringRequest);
    }

    public void getDataJson(String response) {

        try {
            JSONObject jsonObject = new JSONObject(response);

            double heightJSON = jsonObject.isNull("height") ? null : jsonObject.getDouble("height");
            double weightJSON = jsonObject.isNull("weight") ? null : jsonObject.getDouble("weight");

            DecimalFormat decimalFormat = new DecimalFormat("#.##");

            weight.setText(String.valueOf(decimalFormat.format(weightJSON / 10)) + " kg");
            height.setText(String.valueOf(decimalFormat.format(heightJSON / 10)) + " m");

//            int idJSON = jsonObject.isNull("id") ? null : jsonObject.getInt("id");
//            pokeID.setText(idJSON);

            try {
                JSONArray jsonArray = jsonObject.getJSONArray("types");

                JSONObject object00 = jsonArray.getJSONObject(0);
                JSONObject typeJSON00 = object00.getJSONObject("type");
                String name00 = typeJSON00.isNull("name") ? null : typeJSON00.getString("name");

                GradientDrawable gd = new GradientDrawable();
                gd.setCornerRadius(10);

                switch (name00) {
                    case "normal":
                        gd.setColor(getResources().getColor(R.color.normal));
                        break;
                    case "fire":
                        gd.setColor(getResources().getColor(R.color.fire));
                        break;
                    case "water":
                        gd.setColor(getResources().getColor(R.color.water));
                        break;
                    case "electric":
                        gd.setColor(getResources().getColor(R.color.electric));
                        break;
                    case "grass":
                        gd.setColor(getResources().getColor(R.color.grass));
                        break;
                    case "ice":
                        gd.setColor(getResources().getColor(R.color.ice));
                        break;
                    case "fighting":
                        gd.setColor(getResources().getColor(R.color.fighting));
                        break;
                    case "poison":
                        gd.setColor(getResources().getColor(R.color.poison));
                        break;
                    case "ground":
                        gd.setColor(getResources().getColor(R.color.ground));
                        break;
                    case "flying":
                        gd.setColor(getResources().getColor(R.color.flying));
                        break;
                    case "psychic":
                        gd.setColor(getResources().getColor(R.color.psychic));
                        break;
                    case "bug":
                        gd.setColor(getResources().getColor(R.color.bug));
                        break;
                    case "rock":
                        gd.setColor(getResources().getColor(R.color.rock));
                        break;
                    case "ghost":
                        gd.setColor(getResources().getColor(R.color.ghost));
                        break;
                    case "dragon":
                        gd.setColor(getResources().getColor(R.color.dragon));
                        break;
                    case "dark":
                        gd.setColor(getResources().getColor(R.color.dark));
                        break;
                    case "steel":
                        gd.setColor(getResources().getColor(R.color.steel));
                        break;
                    case "fairy":
                        gd.setColor(getResources().getColor(R.color.fairy));
                        break;
                }

                if (name00 != null) {
                    type01.setVisibility(View.VISIBLE);
                    type01.setText(name00.toUpperCase());
                    type01.setBackground(gd);
                }

                JSONObject object01 = jsonArray.getJSONObject(1);
                JSONObject typeJSON01 = object01.getJSONObject("type");
                String name01 = typeJSON01.isNull("name") ? null : typeJSON01.getString("name");

                GradientDrawable gd1 = new GradientDrawable();
                gd1.setCornerRadius(10);

                switch (name01) {
                    case "normal":
                        gd1.setColor(getResources().getColor(R.color.normal));
                        break;
                    case "fire":
                        gd1.setColor(getResources().getColor(R.color.fire));
                        break;
                    case "water":
                        gd1.setColor(getResources().getColor(R.color.water));
                        break;
                    case "electric":
                        gd1.setColor(getResources().getColor(R.color.electric));
                        break;
                    case "grass":
                        gd1.setColor(getResources().getColor(R.color.grass));
                        break;
                    case "ice":
                        gd1.setColor(getResources().getColor(R.color.ice));
                        break;
                    case "fighting":
                        gd1.setColor(getResources().getColor(R.color.fighting));
                        break;
                    case "poison":
                        gd1.setColor(getResources().getColor(R.color.poison));
                        break;
                    case "ground":
                        gd1.setColor(getResources().getColor(R.color.ground));
                        break;
                    case "flying":
                        gd1.setColor(getResources().getColor(R.color.flying));
                        break;
                    case "psychic":
                        gd1.setColor(getResources().getColor(R.color.psychic));
                        break;
                    case "bug":
                        gd1.setColor(getResources().getColor(R.color.bug));
                        break;
                    case "rock":
                        gd1.setColor(getResources().getColor(R.color.rock));
                        break;
                    case "ghost":
                        gd1.setColor(getResources().getColor(R.color.ghost));
                        break;
                    case "dragon":
                        gd1.setColor(getResources().getColor(R.color.dragon));
                        break;
                    case "dark":
                        gd1.setColor(getResources().getColor(R.color.dark));
                        break;
                    case "steel":
                        gd1.setColor(getResources().getColor(R.color.steel));
                        break;
                    case "fairy":
                        gd1.setColor(getResources().getColor(R.color.fairy));
                        break;
                }

                if (name01 != null) {
                    type02.setVisibility(View.VISIBLE);
                    type02.setText(name01.toUpperCase());
                    type02.setBackground(gd1);
                }

            } catch (Exception ex) {
                ex.printStackTrace();
            }

            try {
                String pokeImageUrl = "https://img.pokemondb.net/artwork/" + pokeTitle + ".jpg";

                final ImageRequest imageRequest = new ImageRequest(pokeImageUrl, new Response.Listener<Bitmap>() {
                    @Override
                    public void onResponse(final Bitmap response) {
                        progressBarMainImage.setVisibility(View.GONE);
                        mainImage.setImageBitmap(response);
                    }
                }, 0, 0, ImageView.ScaleType.CENTER_INSIDE, null, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                });

                RequestQueue requestQueue = Volley.newRequestQueue(this);
                requestQueue.add(imageRequest);

            } catch (Exception ex) {
                ex.printStackTrace();
            }

            progressBarMain.setVisibility(View.GONE);
            linear_layout_main.setVisibility(View.VISIBLE);

            JSONArray jsonArray = jsonObject.getJSONArray("stats");

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject object = jsonArray.getJSONObject(i);
                JSONObject typeJSON = object.getJSONObject("stat");

                String name = typeJSON.getString("name");
                String base_stat = object.getString("base_stat");


                switch (name) {
                    case "speed":
                        speed.setText(base_stat);
                        break;
                    case "special-defense":
                        special_defense.setText(base_stat);
                        break;
                    case "special-attack":
                        special_attack.setText(base_stat);
                        break;
                    case "attack":
                        attack.setText(base_stat);
                        break;
                    case "defense":
                        defense.setText(base_stat);
                        break;
                    case "hp":
                        hp.setText(base_stat);
                        break;
                }

            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

//        progressBarMain.setVisibility(View.GONE);
//        linear_layout_main.setVisibility(View.VISIBLE);


    }

}
