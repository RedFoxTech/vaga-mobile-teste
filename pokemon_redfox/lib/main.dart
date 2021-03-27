import 'package:flutter/material.dart';
import 'package:pokemon_redfox/pages/pokemon_list_page.dart';

void main() {
  runApp(PokemonApp());
}

class PokemonApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: Colors.redAccent),
      home: PokemonListPage(),
    );
  }
}
