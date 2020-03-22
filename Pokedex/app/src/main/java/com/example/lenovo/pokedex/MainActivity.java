package com.example.lenovo.pokedex;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.example.lenovo.pokedex.fragment.FragmentPokemons;

public class MainActivity extends AppCompatActivity {


    FragmentManager fm;

    FragmentPokemons fragmentPokemons;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        fm = getSupportFragmentManager();

        fragmentPokemons = new FragmentPokemons();
        navegar(fragmentPokemons, fragmentPokemons.TAG);
    }


    public void navegar(Fragment fragment, String tag) {
        FragmentTransaction ft = fm.beginTransaction();
        ft.addToBackStack(tag);
        ft.replace(R.id.frameLayout, fragment).commit();
    }
}
