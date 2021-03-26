import 'package:flutter/material.dart';
import 'package:pokemon_redfox/models/pokemon_result_model.dart';
import 'package:pokemon_redfox/services/pokemon_service.dart';

class PokemonListPage extends StatefulWidget {
  @override
  _PokemonListPageState createState() => _PokemonListPageState();
}

class _PokemonListPageState extends State<PokemonListPage> {
  PokemonService pokemonService;
  String _search;
  @override
  void initState() {
    super.initState();
    pokemonService = PokemonService();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Pokemon RedFox"),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: EdgeInsets.all(18.0),
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Pesquisa',
                  labelText: 'Pesquisa',
                  border: OutlineInputBorder(),
                ),
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 18.0,
                ),
                onSubmitted: (text) {
                  setState(() {
                    _search = text;
                  });
                },
              ),
            ),
            Container(
              height: MediaQuery.of(context).size.height,
              child: FutureBuilder<PokemonResultModel>(
                  future: pokemonService.getPokemons(),
                  builder: (context, snapshot) {
                    if (snapshot.connectionState != ConnectionState.done) {
                      return Center(
                        child: CircularProgressIndicator(),
                      );
                    }

                    if (snapshot.hasError) {
                      return Center(
                        child: Text("Ops algo deu errado!"),
                      );
                    }

                    if (!snapshot.hasData) {
                      return Center(
                        child: Text("Ops não temos nada para exibir!"),
                      );
                    }
                    return buildListViewPokemon(snapshot);
                  }),
            ),
          ],
        ),
      ),
    );
  }

  ListView buildListViewPokemon(AsyncSnapshot<PokemonResultModel> snapshot) {
    return ListView.builder(
        padding: EdgeInsets.only(right: 18.0, left: 18.0),
        shrinkWrap: true,
        itemCount: snapshot.data.results.length,
        itemBuilder: (_, index) {
          final item = snapshot.data.results[index];
          return ListTile(
            title: Text("${item?.detail?.name}"),
            leading: Image.network(item.getImage),
            subtitle: Text("Habilidade: ${item.getAbilities}"),
          );
        });
  }
}
