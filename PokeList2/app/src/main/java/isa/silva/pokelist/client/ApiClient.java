package isa.silva.pokelist.client;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import static isa.silva.pokelist.utils.Constants.URL_WEBSERVICE;

public class ApiClient {

    private static Retrofit retrofit = null;

    public static Retrofit getClient() {
        if (retrofit == null) {
            retrofit = new Retrofit.Builder()
                    .baseUrl(URL_WEBSERVICE)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return retrofit;
    }

}