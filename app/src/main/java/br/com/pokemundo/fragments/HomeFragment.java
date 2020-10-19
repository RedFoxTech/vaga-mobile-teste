package br.com.pokemundo.fragments;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.ProgressBar;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;
import java.util.List;

import br.com.pokemundo.R;
import br.com.pokemundo.adapters.RecyclerViewPokemonAdapter;
import br.com.pokemundo.interfaces.IntegrationFragment;
import br.com.pokemundo.interfaces.RecyclerViewClickListener;
import br.com.pokemundo.model.pokemon.Pokemon;
import br.com.pokemundo.viewmodel.PokemonViewModel;

/**
 * A simple {@link Fragment} subclass.
 */
public class HomeFragment extends Fragment implements RecyclerViewClickListener {
    private IntegrationFragment integration;
    private RecyclerView recyclerViewPokemon;
    private PokemonViewModel pokemonViewModel;
    private RecyclerViewPokemonAdapter adapter;
    private ProgressBar progressBar;
    private List<Pokemon> pokemons = new ArrayList<>();

    private int offset = 0;
    private int limit = 20;
    private int maxpokemon = 100;
    private Boolean noDetail = true;


    public HomeFragment() {
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
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_home, container, false);
        setHasOptionsMenu(true);
        initViews(view);

        //Observable Update Recycler
        if (noDetail) {
            //Inicializa ViewModel
            pokemonViewModel.getPokemon(offset, limit);

            pokemonViewModel.getPokemonLiveData()
                    .observe(getViewLifecycleOwner(), pokemons -> adapter.update(pokemons));

            //Observable Loading
            pokemonViewModel.getLoadingLiveData()
                    .observe(getViewLifecycleOwner(), isLoading -> {
                        if (isLoading) {
                            progressBar.setVisibility(View.VISIBLE);
                        } else {
                            progressBar.setVisibility(View.GONE);
                        }
                    });

            //Observable Error
            pokemonViewModel.getErrorLiveData()
                    .observe(getViewLifecycleOwner(), throwable -> {
                        Snackbar.make(recyclerViewPokemon, throwable.getMessage(), Snackbar.LENGTH_LONG).show();
                    });
        } else {
            progressBar.setVisibility(View.GONE);
        }
        noDetail = true;
        return view;
    }

    private void initViews(View view) {
        //Views
        recyclerViewPokemon = view.findViewById(R.id.recyclerViewPokemon);
        //ViewModel
        pokemonViewModel = ViewModelProviders.of(this).get(PokemonViewModel.class);
        //Views
        recyclerViewPokemon = view.findViewById(R.id.recyclerViewPokemon);
        progressBar = view.findViewById(R.id.progressBar);

        //Adapter
        adapter = new RecyclerViewPokemonAdapter(pokemons, this);

        recyclerViewPokemon.setHasFixedSize(true);
        recyclerViewPokemon.setItemViewCacheSize(20);
        recyclerViewPokemon.setAdapter(adapter);
        recyclerViewPokemon.setLayoutManager(new GridLayoutManager(view.getContext(), 2));

        recyclerViewPokemon.setItemViewCacheSize(0);

        setScroolListener();
    }

    private void setScroolListener() {
        recyclerViewPokemon.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);
            }

            @Override
            public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
                try {
                    if (dx == 0 && dy == 0) return;

                    LinearLayoutManager manager = (LinearLayoutManager) recyclerView.getLayoutManager();
                    int totalitemCount = manager.getItemCount();
                    int lastVisible = manager.findLastVisibleItemPosition();
                    int firstVisible = manager.findFirstVisibleItemPosition();
                    boolean endRecycler = ((lastVisible + firstVisible) >= totalitemCount && firstVisible >= 0); //lastVisible + 5 >= totalitemCount;

                    if (totalitemCount > 0 && endRecycler) {

                        if (offset + limit < maxpokemon) {
                            offset = (offset + limit);
                            pokemonViewModel.getPokemon(offset, limit);
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    @Override
    public void onItemClick(Pokemon pokemon) {
        if (integration instanceof IntegrationFragment) {
            noDetail = false;
            integration.integrationPokemon(new DetailFragment(), pokemon);
        }
    }




}