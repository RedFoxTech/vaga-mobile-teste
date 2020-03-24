//
//  PokemonCellTableViewCell.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import UIKit

class PokemonCellTableViewCell: UITableViewCell {


    @IBOutlet weak var bgView: UIView!
    @IBOutlet weak var titleLBL: UILabel!
    

    
    override func awakeFromNib() {
        super.awakeFromNib()
        setupUI()
    }
    
    private func setupUI() {
        self.bgView.layer.cornerRadius = 20
    }

}
