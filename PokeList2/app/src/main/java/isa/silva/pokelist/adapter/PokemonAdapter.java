package isa.silva.pokelist.adapter;

import android.app.Dialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.squareup.picasso.Picasso;

import java.util.List;

import isa.silva.pokelist.R;
import isa.silva.pokelist.activity.MainActivity;
import isa.silva.pokelist.model.Pokemon;
import isa.silva.pokelist.model.Species;
import isa.silva.pokelist.model.Sprite;

public class PokemonAdapter extends RecyclerView.Adapter<PokemonAdapter.PokeViewHolder> {



    private List<Pokemon> pokemonList;

    public Context mContext;
    public PokemonAdapter(List<Pokemon> pokemonList) {
        this.pokemonList = pokemonList;
    }

    @Override
    public PokeViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        mContext = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View itemView = inflater.inflate(R.layout.line_pokemon, parent, false);

        return new PokeViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(final PokeViewHolder holder, int position) {
        final Pokemon pokemon = pokemonList.get(position);
        holder.id.setText("#0"+ pokemon.getId().toString());
        holder.name.setText(pokemon.getName().toUpperCase());



        Sprite sprite = new Sprite();
        sprite = pokemon.getSprites();







        Picasso.with(holder.ivPokemon.getContext())
                .load(sprite.getFront_default())
                .resize(96, 96)
                .into(holder.ivPokemon);
        holder.linear.setVisibility(View.INVISIBLE);

        holder.content.setOnClickListener(
                new View.OnClickListener() {

                    @Override
                    public void onClick(View view) {
                      holder.linear.setVisibility(View.VISIBLE);
                        Species species = new Species();
                        species =  pokemon.getSpecies();
                        holder.weight.setText("Height: "+pokemon.getHeight().toString().toUpperCase()+
                                ";  Weight: "+ pokemon.getWeight().toString().toUpperCase() +
                                ";  Experience: "+pokemon.getExperience().toString().toUpperCase()+";");
                              }
                });

    }

    @Override
    public int getItemCount() {
        return pokemonList.size();
    }

    public class PokeViewHolder extends RecyclerView.ViewHolder {
        public TextView name;
        public TextView id;
        public ImageView ivPokemon;
        public RelativeLayout content;
        public LinearLayout linear;
        public TextView  experience, height, species, weight;

        public PokeViewHolder(View itemView) {
            super(itemView);

            id = (TextView) itemView.findViewById(R.id.tv_id);
            name = (TextView) itemView.findViewById(R.id.tv_name);
            ivPokemon = (ImageView) itemView.findViewById(R.id.iv_foto);
            content = (RelativeLayout) itemView.findViewById(R.id.content);
            experience = (TextView) itemView.findViewById(R.id.tv_base_experience);
            height = (TextView) itemView.findViewById(R.id.tv_height);

            species = (TextView) itemView.findViewById(R.id.tv_species);
            weight = (TextView) itemView.findViewById(R.id.tv_weight);

            linear = (LinearLayout) itemView.findViewById(R.id.detalhes);
        }
    }





    public List<Pokemon> getItems() {
        return pokemonList;
    }

    public void setItem(int position, Pokemon pokemon) {
        pokemonList.set(position, pokemon);
    }




}