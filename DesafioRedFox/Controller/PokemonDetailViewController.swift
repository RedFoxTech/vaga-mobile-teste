//
//  PokemonDetailViewController.swift
//  DesafioRedFox
//
//  Created by erick pisco on 13/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import UIKit

class PokemonDetailViewController: UIViewController {
    
    @IBOutlet weak var imPokemon: UIImageView!
    @IBOutlet weak var lbName: UILabel!
    @IBOutlet weak var imFront: UIImageView!
    @IBOutlet weak var imBack: UIImageView!
    @IBOutlet weak var imFrontS: UIImageView!
    @IBOutlet weak var imBackS: UIImageView!
    @IBOutlet weak var lbHp: UILabel!
    @IBOutlet weak var lbAttack: UILabel!
    @IBOutlet weak var lbDefense: UILabel!
    @IBOutlet weak var lbSpAttack: UILabel!
    @IBOutlet weak var lbSpDefense: UILabel!
    @IBOutlet weak var lbSpeed: UILabel!
    
    
    var pokemon: pokemonData!
    var pokemonInfo: pokemonDetail!

    
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

    override func viewDidLoad() {
        super.viewDidLoad()
        print(pokemon)
        
        imPokemon.layer.cornerRadius = imPokemon.frame.size.height/4

        if pokemonInfo != nil {
            loadingInfo(id: pokemonInfo.id)
        } else {
            loadPokemonDetail()
        }

    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(false, animated: true)
        
    }

    

    func loadPokemonDetail() {
        let name = pokemon.name
        PokemonAPI.loadPokemonInfo(name: name, id: 0) { (info) in
            if let info = info {
                self.pokemonInfo = info
                DispatchQueue.main.async {
                    print(self.pokemonInfo.id)
                    self.loadingInfo(id: self.pokemonInfo.id)
                    
                }
            }
        }
}
    
    func loadingInfo(id: Int) {
        
        let urlFront = URL(string: url + "\(id).png" )
        let urlBack = URL(string: url + "back/" + "\(id).png" )
        let urlFrontS = URL(string: url + "shiny/" + "\(id).png" )
        let urlBackS = URL(string: url + "back/shiny/" + "\(id).png" )
        
        
        // Image Loading
        
        imPokemon.kf.setImage(with: urlFront)
        imFront.kf.setImage(with: urlFront)
        imBack.kf.setImage(with: urlBack)
        imFrontS.kf.setImage(with: urlFrontS)
        imBackS.kf.setImage(with: urlBackS)
        
        

        
        
        //Stats Loading
        
        lbName.text = pokemonInfo.name
        lbHp.text = String(pokemonInfo.stats[0].base_stat)
        lbAttack.text = String(pokemonInfo.stats[1].base_stat)
        lbDefense.text = String(pokemonInfo.stats[2].base_stat)
        lbSpAttack.text = String(pokemonInfo.stats[3].base_stat)
        lbSpDefense.text = String(pokemonInfo.stats[4].base_stat)
        lbSpeed.text = String(pokemonInfo.stats[5].base_stat)

    }

}
