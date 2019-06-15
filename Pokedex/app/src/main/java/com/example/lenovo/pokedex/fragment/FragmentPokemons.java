package com.example.lenovo.pokedex.fragment;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import com.example.lenovo.pokedex.MainActivity;
import com.example.lenovo.pokedex.PokemonAdapter;
import com.example.lenovo.pokedex.R;
import com.example.lenovo.pokedex.model.DefaultApiAttributes;
import com.example.lenovo.pokedex.model.PokemonItem;
import com.example.lenovo.pokedex.presenter.ListarPokemonsPresenter;
import com.example.lenovo.pokedex.service.ServiceFactory;
import com.example.lenovo.pokedex.view.ListarPokemonsView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class FragmentPokemons extends Fragment implements ListarPokemonsView {

    public static String TAG = "FragmentPokemons";
    List<DefaultApiAttributes> pokemonsItem;
    List<DefaultApiAttributes> listaDefaultApiAttributes;
    DefaultApiAttributes defaultApiAttributes;
    ListarPokemonsPresenter listarPokemonsPresenter;
    PokemonAdapter pokemonAdapter;
    MainActivity activity;
    ListView lstPokemon;
    DefaultApiAttributes pokemonItem;
    FragmentDetalhes fragmentDetalhes;

    Button btnGO;
    Button btnOrdemAlfa;
    Button btnOrdemDec;
    EditText edNomePokemon;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_pokemons, container, false);
        listarPokemonsPresenter = new ListarPokemonsPresenter(ServiceFactory.create(), this);

        btnGO = v.findViewById(R.id.btnGO);
        btnOrdemAlfa = v.findViewById(R.id.btnOrdemAlfa);
        btnOrdemDec = v.findViewById(R.id.btnOrdemDec);
        edNomePokemon = v.findViewById(R.id.edNomePokemon);

        listarPokemonsPresenter.CarregarPokemons();


        activity = (MainActivity) getActivity();
        lstPokemon = v.findViewById(R.id.lstPoke);


        pokemonAdapter = new PokemonAdapter(activity);

        lstPokemon.setAdapter(pokemonAdapter);

        lstPokemon.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                pokemonItem = new DefaultApiAttributes();
                pokemonItem = pokemonAdapter.getItem(position);
                Bundle b = new Bundle();
                //criando um bundle pra passar o nome e a url do pokemon pra fragment dos detalhes

                b.putString("nomePokemon", pokemonItem.getName());
                b.putString("urlPokemon", pokemonItem.getUrl());

                fragmentDetalhes = new FragmentDetalhes();

                fragmentDetalhes.setArguments(b);

                activity.navegar(fragmentDetalhes, fragmentDetalhes.TAG);

            }
        });

        btnGO.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                listaDefaultApiAttributes = new ArrayList<>();

                //uso esse laço p/ fazer um novo list =, porem só com os pokemons que batem com o nome pesquisado
                for(int i =0; i<pokemonsItem.size(); i++){
                    if(pokemonsItem.get(i).getName().contains(edNomePokemon.getText().toString())){
                        defaultApiAttributes = pokemonsItem.get(i);
                        listaDefaultApiAttributes.add(defaultApiAttributes);
                    }
                }

                preencherAdapter(listaDefaultApiAttributes);

            }
        });

        btnOrdemDec.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //uso o metodo reverse da Collections para ordenar com o id decrescente
                List<DefaultApiAttributes> pokemonsItemDec = pokemonsItem;
                Collections.reverse(pokemonsItemDec);
                preencherAdapter(pokemonsItemDec);
            }
        });

        btnOrdemAlfa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //uso o sort da Collections, passando o novo list que estara ordenado e faço uma intância do Comparator
                List<DefaultApiAttributes> pokemonsItemAlfa = pokemonsItem;
                Collections.sort(pokemonsItemAlfa, new Comparator<DefaultApiAttributes>() {
                    @Override
                    public int compare(DefaultApiAttributes dat1, DefaultApiAttributes dat2) {
                        return dat1.getName().compareTo(dat2.getName());
                    }
                });

                preencherAdapter(pokemonsItemAlfa);

            }
        });

        return v;
    }

    public void preencherAdapter(List<DefaultApiAttributes> pokemonsItem){
        pokemonAdapter.clear();
        pokemonAdapter.addAll(pokemonsItem);

    }


    @Override
    public void sucessoListagem(List<DefaultApiAttributes> pokemonsItem) {
        this.pokemonsItem = pokemonsItem;
        preencherAdapter(this.pokemonsItem);

    }

    @Override
    public void fracassoListagem() {

    }
}
