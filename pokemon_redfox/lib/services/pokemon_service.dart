import 'dart:convert' as convert;
import 'package:pokemon_redfox/models/pokemon_model.dart';
import 'package:pokemon_redfox/models/pokemon_result_model.dart';
import 'package:http/http.dart' as http;

class PokemonService {
  Future<PokemonResultModel> getPokemons() async {
    var url = Uri.parse('https://pokeapi.co/api/v2/pokemon?limit=50');
    var response = await http.get(url);
    if (response.statusCode == 200) {
      var jsonResponse = convert.jsonDecode(response.body);
      var pokemonResult = PokemonResultModel.fromJson(jsonResponse);

      for (int i = 0; i < pokemonResult.results.length; i++) {
        final element = pokemonResult.results[i];
        pokemonResult.results[i].detail =
            await getPokemonDetailByUrl(element.url);
      }
      return pokemonResult;
    }

    return null;
  }

  Future<PokemonDetailModel> getPokemonDetailByUrl(String url) async {
    var responseDetail = await http.get(Uri.parse(url));
    if (responseDetail.statusCode == 200) {
      var jsonResponseDetail = convert.jsonDecode(responseDetail.body);
      return PokemonDetailModel.fromJson(jsonResponseDetail);
    }
    return null;
  }
}
