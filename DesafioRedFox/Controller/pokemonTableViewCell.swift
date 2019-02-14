//
//  pokemonTableViewCell.swift
//  DesafioRedFox
//
//  Created by erick pisco on 12/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import UIKit
import Kingfisher

class pokemonTableViewCell: UITableViewCell {

    @IBOutlet weak var imgPoke: UIImageView!
    @IBOutlet weak var lbName: UILabel!
    
    
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        
    }
    
    // MARK: - Navigation
    
    func prepareCell(with pokemon: pokemonData, pokemonId: Int) {
        let url = URL(string: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + "\(pokemonId).png" )
        lbName.text = pokemon.name
        imgPoke.kf.setImage(with: url)
        
        
    }

}
