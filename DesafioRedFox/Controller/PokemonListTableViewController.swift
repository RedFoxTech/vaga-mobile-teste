//
//  PokemonListTableViewController.swift
//  DesafioRedFox
//
//  Created by erick pisco on 12/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import UIKit

class PokemonListTableViewController: UITableViewController {
    
    var name: String?
    var id = 0
    var pokemon: [pokemonData] = []
    var label: UILabel = {
        let label = UILabel()
        label.textAlignment = .center
        label.textColor = .black
        return label
    }()
    
    var loadingPokemon = false
    var curretPage = 0
    var total = 0
    override func viewDidLoad() {
        super.viewDidLoad()
        loadPokemon()
        label.text = "Searching..."
        
        
        
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(false, animated: true)
        
    }
    
    func loadPokemon() {
        loadingPokemon = true
        
        PokemonAPI.loadPokemon(name: name, id: 0, page: curretPage) { (info) in
            if let info = info {
                self.pokemon += info.results
                self.total = info.count
                
                DispatchQueue.main.async {
                    self.loadingPokemon = false
                    self.tableView.reloadData()
                }
            }
        }
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return pokemon.count
    }

    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! pokemonTableViewCell
        let pokemonInfo =  pokemon[indexPath.row]
        let pokemonId = indexPath.row + 1
        cell.prepareCell(with: pokemonInfo, pokemonId: pokemonId)
        return cell
    }
    
    override func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        if indexPath.row == pokemon.count - 10 && !loadingPokemon && pokemon.count != total {
            curretPage += 1
            loadPokemon()
            print("carregando mais........")
        }
    }
    
    // MARK: - Navigation

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let vc = segue.destination as! PokemonDetailViewController
        vc.pokemon = pokemon[tableView.indexPathForSelectedRow!.row]
    }
    

}
