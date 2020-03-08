//
//  PokemonDetailViewController.swift
//  victorAlmeida
//
//  Created by Victor on 29/09/2019.
//  Copyright © 2019 Rinver. All rights reserved.
//

import UIKit
import SDWebImage


class PokemonDetailViewController: UIViewController {

    @IBOutlet weak var namePokemon:UILabel!
    @IBOutlet weak var labelAbilityPokemon:UILabel!
    @IBOutlet weak var labelTypePokemon:UILabel!
    @IBOutlet weak var pokemonImage:UIImageView!
    
    
    var pokemonDetail: PokemonResponse?
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let pokemon = pokemonDetail{
            let name = pokemon.name
            let abilities = pokemon.abilities
            if let spriteUrl = pokemon.sprites?.front_default{
                self.namePokemon.text = name
                print(abilities as Any)
                self.pokemonImage.sd_setImage(with: URL(string: spriteUrl), placeholderImage: nil, options: .handleCookies, context: nil)
            }
        
        }
        
    }
    
}
