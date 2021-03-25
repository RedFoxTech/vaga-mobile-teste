import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _search;
  int _offSet = 0;

  Future<Map> _getPokemon() async {
    http.Response response;

    if (_search == null) {
      response =
          await http.get(Uri.parse('https://pokeapi.co/api/v2/pokemon/ditto'));
    } else {
      response =
          await http.get(Uri.parse('https://pokeapi.co/api/v2/pokemon/ditto'));
    }
    return json.decode(response.body);
  }

  @override
  void initState() {
    super.initState();
    _getPokemon().then((map) {
      print(map);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        title: Text(
          'Pokemon RedFox',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
      ),
      backgroundColor: Colors.black,
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(18.0),
            child: TextField(
              decoration: InputDecoration(
                labelText: 'Search',
                hintText: 'Search',
                labelStyle: TextStyle(color: Colors.white),
                border: OutlineInputBorder(),
              ),
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
              ),
            ),
          ),
          Expanded(
            child: FutureBuilder(
              future: _getPokemon(),
              builder: (context, snapshot) {
                switch (snapshot.connectionState) {
                  case ConnectionState.waiting:
                  case ConnectionState.none:
                    return Container(
                      width: 200.0,
                      height: 200.0,
                      alignment: Alignment.center,
                      child: CircularProgressIndicator(
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                        strokeWidth: 5.0,
                      ),
                    );
                  default:
                    if (snapshot.hasError) {
                      return Container();
                    } else {
                      return _createPokemonTable(context, snapshot);
                    }
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}

Widget _createPokemonTable(BuildContext context, AsyncSnapshot snapshot) {
  return GridView.builder(
      padding: EdgeInsets.all(18.0),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 18.0,
        mainAxisExtent: 18.0,
      ),
      itemCount: snapshot.data['abilities'].length,
      itemBuilder: (context, index) {
        return GestureDetector(
          child: Image.network(
            snapshot.data['abilities'][index]['ability']['name']['url'],
            height: 300.0,
            fit: BoxFit.cover,
          ),
        );
      });
}
