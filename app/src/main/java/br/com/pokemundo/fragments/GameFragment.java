package br.com.pokemundo.fragments;


import android.content.Context;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;

import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProviders;

import com.google.android.material.snackbar.Snackbar;
import com.squareup.picasso.Picasso;

import java.util.List;
import java.util.Random;

import br.com.pokemundo.R;
import br.com.pokemundo.interfaces.IntegrationFragment;
import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.viewmodel.GameViewModel;

/**
 * A simple {@link Fragment} subclass.
 */
public class GameFragment extends Fragment {
    private IntegrationFragment integration;
    private ImageView imagePokemonWho;
    private ProgressBar progressBarGame;

    // Fazer a inicialização do view model
    private GameViewModel viewModel;
    private List<Pokemon> pokemonList;
    private Button btnOptionA;
    private Button btnOptionB;
    private Button btnOptionC;


    public GameFragment() {
        // Required empty public constructor
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        try {
            integration = (IntegrationFragment) context;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_game, container, false);
        initViews(view);

        viewModel.getPokemonJson();
        viewModel.getGameLiveData().observe(getViewLifecycleOwner(), pokemons -> setListGame(pokemons));
        viewModel.getLoadingLiveData().observe(getViewLifecycleOwner(), isLoading -> {
            if (isLoading) {
                progressBarGame.setVisibility(View.VISIBLE);
            } else {
                progressBarGame.setVisibility(View.GONE);
            }
        });
        viewModel.getErrorLiveData().observe(getViewLifecycleOwner(), throwable -> {
            Snackbar.make(view, throwable.getMessage(), Snackbar.LENGTH_SHORT).show();
        });

        return view;
    }

    private void setListGame(List<Pokemon> pokemons) {
        if (pokemons != null) {
            try {
                pokemonList = pokemons;

                if (pokemonList != null && pokemonList.size() == 26) {
                    Random ran = new Random();
                    int x = ran.nextInt(26);
                    int y = ran.nextInt(26);
                    while (x == y) {
                        y = ran.nextInt(26);
                    }
                    int z = ran.nextInt(26);
                    while (z == x || z == y) {
                        z = ran.nextInt(26);
                    }

                    int w = ran.nextInt(3); //Botão correto

                    Pokemon pokemonA = pokemonList.get(x);
                    Pokemon pokemonB = pokemonList.get(y);
                    Pokemon pokemonC = pokemonList.get(z);

                    switch (w) {
                        case 0:
                            btnOptionA.setText(pokemonA.getName());
                            btnOptionB.setText(pokemonB.getName());
                            btnOptionC.setText(pokemonC.getName());
                            break;
                        case 1:
                            btnOptionB.setText(pokemonA.getName());
                            btnOptionA.setText(pokemonB.getName());
                            btnOptionC.setText(pokemonC.getName());
                            break;
                        case 2:
                            btnOptionC.setText(pokemonA.getName());
                            btnOptionB.setText(pokemonB.getName());
                            btnOptionA.setText(pokemonC.getName());
                            break;
                    }

                    progressBarGame.setVisibility(View.VISIBLE);

                    Picasso

                            .get()
                            .load("file:///android_asset/" + pokemonA.getId() + ".png")
                            .fit()
                            .placeholder(R.drawable.defaultpokemon)
                            .error(R.drawable.defaultpokemon)
                            .into(imagePokemonWho);

                    imagePokemonWho.setColorFilter(Color.BLACK, PorterDuff.Mode.SRC_ATOP);
                    progressBarGame.setVisibility(View.GONE);

                    btnOptionA.setOnClickListener(v -> {
                        Boolean ok = false;
                        if (w == 0) ok = true;

                        SetResultFragment(pokemonA, ok);
                    });
                    btnOptionB.setOnClickListener(v -> {
                        Boolean ok = false;
                        if (w == 1) ok = true;
                        SetResultFragment(pokemonA, ok);
                    });
                    btnOptionC.setOnClickListener(v -> {
                        Boolean ok = false;
                        if (w == 2) ok = true;
                        SetResultFragment(pokemonA, ok);

                    });
                }
            } catch (Exception e) {
                e.printStackTrace();
            }


        }
    }

    private void SetResultFragment(Pokemon pokemonA, Boolean ok) {
        if (integration instanceof IntegrationFragment) {
            integration.integrationGame(new ResultFragment(), pokemonA, ok);
        }
    }

    private void initViews(View view) {
        viewModel = ViewModelProviders.of(this).get(GameViewModel.class);
        progressBarGame = view.findViewById(R.id.progressBarGame);
        imagePokemonWho = view.findViewById(R.id.imagePokemonWho);
        btnOptionA = view.findViewById(R.id.btnOptionA);
        btnOptionB = view.findViewById(R.id.btnOptionB);
        btnOptionC = view.findViewById(R.id.btnOptionC);
    }


}
