package br.com.pokemundo.data.nerwork;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiService {
    public static final String URL_BASE = "https://pokeapi.co/api/v2/";
    private static Retrofit retrofit;

    public static Retrofit getRetrofit() {

        if (retrofit == null) {

            // configurações da conexão
            OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
            httpClient.readTimeout(300000, TimeUnit.SECONDS);
            httpClient.connectTimeout(300000, TimeUnit.SECONDS);
            httpClient.writeTimeout(300000, TimeUnit.SECONDS);


            retrofit = new Retrofit.Builder()
                    .baseUrl(URL_BASE)
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .addConverterFactory(GsonConverterFactory.create())
                    .client(httpClient.build())
                    .build();
        }

        return retrofit;
    }

    public static Api getApiService() {
        return getRetrofit().create(Api.class);
    }
}
