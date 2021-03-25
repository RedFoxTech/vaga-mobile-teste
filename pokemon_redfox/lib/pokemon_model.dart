import 'package:flutter/material.dart';

class PokemonModel {
  final int code;
  final String name;
  final String image;

  PokemonModel(
      {@required this.code, @required this.name, @required this.image});
}
