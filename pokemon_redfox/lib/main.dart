import 'package:flutter/material.dart';
import 'package:pokemon_redfox/home_page.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: HomePage(),
    theme: ThemeData(
      hintColor: Colors.amber,
      primaryColor: Colors.white,
      inputDecorationTheme: InputDecorationTheme(
          enabledBorder: OutlineInputBorder(
              borderSide: BorderSide(
            color: Colors.white,
          )),
          focusedBorder:
              OutlineInputBorder(borderSide: BorderSide(color: Colors.amber)),
          hintStyle: TextStyle(color: Colors.amber)),
    ),
  ));
}
