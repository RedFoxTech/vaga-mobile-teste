import 'package:flutter/material.dart';
import 'package:pokemon_redfox/models/pokemon_result_model.dart';
import 'package:pokemon_redfox/services/pokemon_service.dart';

class PokemonListPage extends StatefulWidget {
  @override
  _PokemonListPageState createState() => _PokemonListPageState();
}

class _PokemonListPageState extends State<PokemonListPage> {
  PokemonService pokemonService;

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
        child: Container(
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

                return ListView.builder(
                    shrinkWrap: true,
                    itemCount: snapshot.data.results.length,
                    itemBuilder: (_, index) {
                      final item = snapshot.data.results[index];
                      return ListTile(
                        title: Text("${item?.detail?.name}"),
                        leading: Image.network(item.getImage),
                        subtitle: Text("Habilidades: ${item.getAbilities}"),
                      );
                    });
              }),
        ),
      ),
    );
  }
}
