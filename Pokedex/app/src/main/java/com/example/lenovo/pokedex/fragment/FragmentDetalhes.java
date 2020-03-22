package com.example.lenovo.pokedex.fragment;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.lenovo.pokedex.R;
import com.example.lenovo.pokedex.model.Pokemon;
import com.example.lenovo.pokedex.presenter.VisualizarPokemonPresenter;
import com.example.lenovo.pokedex.service.ServiceFactory;
import com.example.lenovo.pokedex.view.VisualizarPokemonView;
import com.squareup.picasso.Picasso;

import retrofit2.http.POST;

public class FragmentDetalhes extends Fragment implements VisualizarPokemonView {

    public static String TAG = "FragmentDetalhes";

    Bundle b;

    VisualizarPokemonPresenter visualizarPokemonPresenter;

    ImageView imgPokemon;
    TextView txtStats;
    TextView txtTipo;
    TextView txtPeso;
    TextView txtNome;

    int id;

    String url;
    String[] pedacos;
    String img;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_detalhes, container, false);

        txtNome = v.findViewById(R.id.txtNome);
        imgPokemon = v.findViewById(R.id.imgPokemon);
        txtPeso = v.findViewById(R.id.txtPeso);
        txtStats = v.findViewById(R.id.txtStats);
        txtTipo = v.findViewById(R.id.txtTipo);

        b = getArguments();

        if(b != null){
            //entro aqui caso tenha recebido o argumento pela activity

            visualizarPokemonPresenter = new VisualizarPokemonPresenter(this, ServiceFactory.create());


            url = b.getString("urlPokemon");

            pedacos = url.split("/");
            id = Integer.parseInt(pedacos[pedacos.length - 1]);
            //poderia ter feito uma função de utilitaries para pegar esse id, mas o tempo tá curto

            visualizarPokemonPresenter.obterPokemon(id);

        }


        return v;
    }

    @Override
    public void sucessoVisualizarPokemon(Pokemon pokemon) {


        txtNome.setText(b.getString("nomePokemon"));

        txtPeso.setText(pokemon.getWeight()+" KG");

        img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";
        //a imagem dos pokemons tem a url parecida, só mudando o id antes do .png, dessa forma, tendo o id consigo facilmente pegar a imagem

        Picasso.get().load(img).into(imgPokemon);

        //concateno todos os tipos em uma string, colocando uma virgula no final de tds, exceto a ultima
        String tipo = "Tipo(s): ";
        for(int i =0; i < pokemon.getTypes().size() - 1; i++){
            tipo = tipo + pokemon.getTypes().get(i).getType().getName()+", ";
        }
        tipo = tipo + pokemon.getTypes().get(pokemon.getTypes().size()-1).getType().getName();

        txtTipo.setText(tipo);

        //aqui faço algo parecido com o laço de tipos, porem  agora concateno o name e o base de cada stat em cada linha
        String stats = "";
        for(int i =0; i < pokemon.getStats().size(); i++){
            stats = stats + pokemon.getStats().get(i).getStat().getName() +": "+pokemon.getStats().get(i).getBase_stat()+"\n\n";
        }
        txtStats.setText(stats);

    }

    @Override
    public void fracassoVisualizarPokemon() {

    }
}
