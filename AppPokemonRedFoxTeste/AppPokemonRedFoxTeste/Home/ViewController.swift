//
//  ViewController.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    
    @IBOutlet weak var tableView: UITableView!
    var isDataLoading: Bool = false
    var pokemons = [Pokemon]()
    var _pokemons = [Pokemon]()
    var _next: String = ""
    
    @IBOutlet weak var searchBar: UISearchBar!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configure()
        getPokemons(url: APISupport.baseURL.rawValue)
    }
    
    private func getPokemons(url: String) {
        APIRequest.getPokemons(url: url) { (response) in
            switch response {
            case .success(let response):
                self.pokemons += response.results
                self._pokemons = self.pokemons
                self._next = response.next
                DispatchQueue.main.async {
                    self.tableView.reloadData()
                }
            case .error(let error):
                print(error)
                
            }
        }
        
    }
    
    private func configure() {
        self.tableView.delegate = self
        self.tableView.dataSource = self
        self.searchBar.delegate = self
    }
    
    private func hiddenKeyboard() {
        self.view.endEditing(true)
    }
    
}

extension ViewController: UITableViewDelegate, UITableViewDataSource, UIScrollViewDelegate {
    
    
    func scrollViewDidEndDragging(_ scrollView: UIScrollView, willDecelerate decelerate: Bool) {
        if((tableView.contentOffset.y + tableView.frame.size.height) >= tableView.contentSize.height){
            if(!isDataLoading){
                isDataLoading = true
                getPokemons(url: _next)
            }
        }
        
    }
    func scrollViewWillBeginDragging(_ scrollView: UIScrollView) {
        isDataLoading = false
        hiddenKeyboard()

    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return _pokemons.count
        
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        guard let cell = tableView.dequeueReusableCell(withIdentifier: "pokemonCell", for: indexPath) as? PokemonCellTableViewCell else { return UITableViewCell() }
        
        cell.titleLBL.text = _pokemons[indexPath.row].name
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        APIRequest.getPokemonFor(name: _pokemons[indexPath.row].name) { (response) in
            switch response {
            case .success(let resp):
                APIRequest.downloadImage(url: resp.sprites.front_default) { (result) in
                    
                    switch result {
                    case .success(let image):
                        APIRequest.downloadImage(url: resp.sprites.back_default) { (result) in
                            switch result {
                            case .success(let img):
                                DispatchQueue.main.async {
                                    let vc = PokemonViewController(name: self._pokemons[indexPath.row].name, image: [image, img])
                                    self.present(vc, animated: true)
                                }
                            case .error(let error):
                                print(error)
                            }
                        }
                    case .error(let error):
                        print(error)
                    }
                }
                
            case .error(let error):
                print(error)
                
            }
        }
    }
    
    
}



extension ViewController: UISearchBarDelegate {
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if(searchText.isEmpty){
            _pokemons = pokemons
        }else{
            _pokemons = pokemons.filter {
                $0.name.uppercased().contains(searchText.uppercased())
            }
        }
        
        self.tableView.reloadData()
    }
    
    func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
        hiddenKeyboard()
    }
    
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        hiddenKeyboard()
    }
    
}



