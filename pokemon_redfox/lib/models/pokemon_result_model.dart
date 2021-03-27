import 'pokemon_model.dart';

class PokemonResultModel {
  int count;
  String next;
  Null previous;
  List<PokemonModel> results;

  PokemonResultModel({this.count, this.next, this.previous, this.results});

  PokemonResultModel.fromJson(Map<String, dynamic> json) {
    count = json['count'];
    next = json['next'];
    previous = json['previous'];
    if (json['results'] != null) {
      results = <PokemonModel>[];
      json['results'].forEach((v) {
        results.add(PokemonModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['count'] = this.count;
    data['next'] = this.next;
    data['previous'] = this.previous;
    if (this.results != null) {
      data['results'] = this.results.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class PokemonModel {
  String name;
  String url;
  PokemonDetailModel detail;

  PokemonModel({this.name, this.url});

  PokemonModel.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    data['name'] = this.name;
    data['url'] = this.url;
    return data;
  }

  String get getImage => detail?.sprites?.other?.officialArtwork?.frontDefault;
  String get getAbilities => detail?.abilities?.fold("",
      (previousValue, element) => previousValue += " ${element.ability.name}");
}
