//
//  ViewController.swift
//  victorAlmeida
//
//  Created by Victor on 27/09/2019.
//  Copyright © 2019 Rinver. All rights reserved.
//

import UIKit
import Alamofire
import SDWebImage

class ViewController: UIViewController,UICollectionViewDataSource,UICollectionViewDelegate {

    
    @IBOutlet weak var pokemonColletionView:UICollectionView!
    @IBOutlet weak var searchPokemon:UISearchBar!
    
    
    var currentPokemon: MasterResponse?
    var pokemonDetails: PokemonResponse?
    var pokemonDetailController = PokemonDetailViewController()
    
    let jsonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"

    override func viewDidLoad() {
        super.viewDidLoad()
        self.getDataPokemon()
        self.pokemonColletionView.reloadData()
        pokemonColletionView.dataSource = self
        pokemonColletionView.delegate = self
    
    }
    
    override func viewDidAppear(_ animated: Bool) {
       // collectionView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if(segue.identifier == "pokemonID"){
            pokemonDetailController = (segue.destination as? PokemonDetailViewController)!
        }
    }
    

    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return currentPokemon?.results?.count ?? 0
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "celulaPokemon", for: indexPath) as! PokemonCollectionViewCell
        
        guard let listaPokemon = currentPokemon?.results?[indexPath.item] else { return cell }
        cell.pokemonLabel.text = listaPokemon.name
        cell.layer.borderWidth = 3
        cell.layer.cornerRadius = 5
//        guard let pokemon = self.showPokemon(indexPath) else {return  cell}
//        if let url = pokemon.sprites?.front_default {
//            cell.pokemonImagem?.sd_setImage(with: URL(string: url), placeholderImage: nil, options: .handleCookies, context: nil)
//        }
        
        return cell
    }
    
    func showPokemon(_ indexPath: IndexPath) -> PokemonResponse?{
        guard let listaPokemon = currentPokemon?.results?[indexPath.row] else { return nil }
        guard let url = listaPokemon.url else {return nil}
        self.getDetailsPokemon(url)
        guard let pokemon = pokemonDetails else {return nil}
        return pokemon
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        if let pokemonRecuperado = showPokemon(indexPath) {
            pokemonDetailController.pokemonDetail = pokemonRecuperado
        }

    }
    
    func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {

    }
    
    //GET lista nome e url pokemon
    func getDataPokemon(){
        Alamofire.request(URL(string: "https://pokeapi.co/api/v2/pokemon") ?? "").responseJSON { (response) in
            do {
                let pokemon = try JSONDecoder().decode(MasterResponse.self, from: response.data!)
                self.currentPokemon = pokemon
             //   print(self.currentPokemon as Any)
                self.pokemonColletionView.reloadData()
            }catch let erro {
                print(erro.localizedDescription)
            }
            
        }
    }
    
    //recebe a url do pokemon retorna dados para variavel pokemonDetails
    func getDetailsPokemon(_ url: String){
        Alamofire.request(URL(string: url) ?? "").responseJSON { (response) in
            do {
                let pokemon = try JSONDecoder().decode(PokemonResponse.self, from: response.data!)
                self.pokemonDetails = pokemon
               // print(self.pokemonDetails as Any)
               // self.pokemonColletionView.reloadData()
            }catch let erro {
                print(erro.localizedDescription)
            }
            
        }
    }
    
}

