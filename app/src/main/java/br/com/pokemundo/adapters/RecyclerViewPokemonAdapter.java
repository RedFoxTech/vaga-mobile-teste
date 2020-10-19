package br.com.pokemundo.adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

import br.com.pokemundo.R;
import br.com.pokemundo.interfaces.RecyclerViewClickListener;
import br.com.pokemundo.model.pokemon.Pokemon;

public class RecyclerViewPokemonAdapter extends RecyclerView.Adapter<RecyclerViewPokemonAdapter.ViewHolder> implements Filterable {
    private List<Pokemon> pokemons;
    private List<Pokemon> exampleListFull;
    private RecyclerViewClickListener listener;
    private Filter exampleFilter = new Filter() {

        @Override
        protected FilterResults performFiltering(CharSequence constraint) {
            List<Pokemon> filteredList = new ArrayList<>();

            if (constraint == null || constraint.length() == 0) {
                filteredList.addAll(exampleListFull);
            } else {
                String filterPattern = constraint.toString().toLowerCase().trim();

                for (Pokemon item : exampleListFull) {
                    if (item.getName().toLowerCase().contains(filterPattern)) {
                        filteredList.add(item);
                    }
                }
            }
            FilterResults results = new FilterResults();
            results.values = filteredList;

            return results;
        }

        @Override
        protected void publishResults(CharSequence constraint, FilterResults results) {

            //pokemons.addAll((Collection<? extends Pokemon>) results.values);
            try {
                pokemons.clear();
                pokemons.addAll((List) results.values);
                notifyDataSetChanged();
            } catch (NullPointerException erro) {
                erro.getMessage();
            }

        }
    };

    public RecyclerViewPokemonAdapter(List<Pokemon> pokemons, RecyclerViewClickListener listener) {
        this.pokemons = pokemons;
        this.exampleListFull = new ArrayList<>(pokemons);
        this.listener = listener;
    }
    public RecyclerViewPokemonAdapter(){

    }

    @NonNull
    @Override
    public RecyclerViewPokemonAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater
                .from(viewGroup.getContext())
                .inflate(R.layout.recyclerview_pokemon_item, viewGroup, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerViewPokemonAdapter.ViewHolder viewHolder, int position) {
        final Pokemon pokemon = pokemons.get(position);
        viewHolder.bind(pokemon);
        viewHolder.itemView.setOnClickListener(v -> listener.onItemClick(pokemon));
    }

    @Override
    public int getItemCount() {
        try{
            return pokemons.size();
        } catch (NullPointerException erro) {
            return 0;
        }


    }

    @Override
    public Filter getFilter() {
        return exampleFilter;
    }


    public void update(List<Pokemon> pokemons) {

        if (pokemons.size() == 0) {
            this.pokemons = pokemons;
        } else {
            this.pokemons.addAll(pokemons);
            notifyDataSetChanged();
        }
    }

    class ViewHolder extends RecyclerView.ViewHolder {

        private ImageView imageViewPokemon;
        private TextView textViewName;
        private TextView textViewId;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            textViewName = itemView.findViewById(R.id.textViewName);
            textViewId = itemView.findViewById(R.id.textViewId);
            imageViewPokemon = itemView.findViewById(R.id.imageViewPokemon);
        }

        public void bind(Pokemon pokemon) {
            if (pokemon.getId() != null) {
                textViewName.setText(pokemon.getName());
                textViewId.setText("#" + pokemon.getId().toString());

                Picasso
                        .get()
                        .load("https://pokeres.bastionbot.org/images/pokemon/" + pokemon.getId() + ".png") //.load("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.getId()+".png")
                        .error(R.drawable.defaultpokemon)
                        .resize(150, 150)
                        .centerCrop()
                        .placeholder(R.drawable.defaultpokemon)
                        .into(imageViewPokemon);
            }
        }
    }
}