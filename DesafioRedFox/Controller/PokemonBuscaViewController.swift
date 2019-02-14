//
//  PokemonBuscaViewController.swift
//  DesafioRedFox
//
//  Created by erick pisco on 14/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import UIKit

class PokemonBuscaViewController: UIViewController,  UITextFieldDelegate {
    @IBOutlet weak var btnBuscar: UIButton!
    @IBOutlet weak var tfBusca: UITextField!
    @IBOutlet weak var aiLoading: UIActivityIndicatorView!
    

    var pokemonInfo: pokemonDetail!
    let sb = UIStoryboard(name: "Main", bundle: nil)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        btnBuscar.isHidden = false
        aiLoading.isHidden = true
        navigationController?.setNavigationBarHidden(true, animated: true)
        
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    
    func loadPokemonDetail() {
        print(tfBusca.text!)
        PokemonAPI.loadPokemonInfo(name: tfBusca.text, id: 0) { (info) in
            if let info = info {
                self.pokemonInfo = info
                DispatchQueue.main.async {
                    self.aiLoading.stopAnimating()
                    self.aiLoading.hidesWhenStopped = true
                    let vc = self.sb.instantiateViewController(withIdentifier: "pokemonDetail") as! PokemonDetailViewController
                    vc.pokemonInfo = self.pokemonInfo
                    self.navigationController?.pushViewController(vc, animated: true)
                    
                }
            } else {
                DispatchQueue.main.async {
                    self.aiLoading.stopAnimating()
                    self.aiLoading.hidesWhenStopped = true
                    let vc = self.sb.instantiateViewController(withIdentifier: "pokemonList") as! PokemonListTableViewController
                    self.navigationController?.pushViewController(vc, animated: true)
            }
        }
    }
 }
    
    @IBAction func btnBuscar(_ sender: Any) {
        loadPokemonDetail()
        aiLoading.isHidden = false
        aiLoading.startAnimating()
        btnBuscar.isHidden = true
        
    }
    
}
