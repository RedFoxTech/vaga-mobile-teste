package br.com.pokemundo.fragments;


import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.fragment.app.Fragment;

import com.squareup.picasso.Picasso;

import br.com.pokemundo.R;
import br.com.pokemundo.interfaces.IntegrationFragment;
import br.com.pokemundo.model.pokemon.Pokemon;

/**
 * A simple {@link Fragment} subclass.
 */
public class ResultFragment extends Fragment {
    private IntegrationFragment integration;
    private ImageView imagePokemonOk;
    private ImageView imageViewResult;
    private TextView textViewName;
    private TextView textViewOKError;
    private Button btnOptionNew;
    private Button btnOptionExit;


    public ResultFragment() {
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
        View view = inflater.inflate(R.layout.fragment_result, container, false);
        initViews(view);
        if (getArguments() != null) {
            Pokemon pokemon = getArguments().getParcelable("POKEMON");
            Boolean ok = getArguments().getBoolean("OK");

            if (pokemon != null && ok != null) {
                try {
                    textViewName.setText(pokemon.getName());

                    Picasso
                            .get()
                            .load("file:///android_asset/" + pokemon.getId() + ".png")
                            .placeholder(R.drawable.defaultpokemon)
                            .error(R.drawable.defaultpokemon)
                            .into(imagePokemonOk);


                    if (ok) {
                        Picasso
                                .get()
                                .load(R.drawable.okpokemon)
                                .placeholder(R.drawable.defaultpokemon)
                                .error(R.drawable.defaultpokemon)
                                .into(imageViewResult);

                        textViewOKError.setText(getString(R.string.result_ok));
                    } else {

                        Picasso
                                .get()
                                .load(R.drawable.errorpokemon)
                                .placeholder(R.drawable.defaultpokemon)
                                .error(R.drawable.defaultpokemon)
                                .into(imageViewResult);

                        textViewOKError.setText(getString(R.string.result_error));
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }

        }
        btnOptionNew.setOnClickListener(v -> setFragment(new GameFragment()));
        btnOptionExit.setOnClickListener(v -> setHomeFragment(new HomeFragment()));

        return view;
    }

    private void initViews(View view) {
        imagePokemonOk = view.findViewById(R.id.imagePokemon);
        imageViewResult = view.findViewById(R.id.imageViewResult);
        textViewName = view.findViewById(R.id.textViewName);
        textViewOKError = view.findViewById(R.id.textViewOKError);
        btnOptionNew = view.findViewById(R.id.btnOptionNew);
        btnOptionExit = view.findViewById(R.id.btnOptionExit);
    }

    private void setFragment(Fragment fragment) {
        if (integration instanceof IntegrationFragment) {
            integration.integrationDefault(fragment);
        }
    }

    private void setHomeFragment(Fragment fragment) {
        if (integration instanceof IntegrationFragment) {
            integration.integrationNoStack(fragment, new Pokemon());
        }
    }


}
