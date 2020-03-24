//
//  PokemonViewController.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import UIKit

class PokemonViewController: UIViewController {

        @IBOutlet weak var name: UILabel!
        @IBOutlet weak var image: UIImageView!
        
        var _name: String
        var _image: [UIImage]
        
        init(name: String, image: [UIImage]) {
            self._name = name
            self._image = image
            super.init(nibName: nil, bundle: nil)

        }
        
        required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
        
        override func viewDidLoad() {
            super.viewDidLoad()
            setupUI()
        }

        private func setupUI() {
            self.name.text = _name
            self.image.animationImages = _image
            self.image.animationDuration = 2
            self.image.startAnimating()
        }
    }
