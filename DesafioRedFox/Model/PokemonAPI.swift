//
//  PokemonAPI.swift
//  DesafioRedFox
//
//  Created by erick pisco on 12/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import Foundation
import Alamofire

class PokemonAPI {
    
    static private let basePath = "https://pokeapi.co/api/v2/pokemon/"
    static private let limit = 30
    
    class func loadPokemon(name: String?, id: Int, page: Int = 0, onComplete: @escaping (pokemonList?) -> Void) {
        let offset = page * limit
        let url = basePath + "?limit=\(limit)&offset=\(offset)"
        print(url)

        
        AF.request(url).responseJSON { (response) in
            guard let data = response.data else {
                onComplete(nil)
                return
            }
            do {
                let infoList = try JSONDecoder().decode(pokemonList.self, from: data)
                onComplete(infoList)
            }catch{
                print("loadPokemonListErro: \(error.localizedDescription)")
                onComplete(nil)
            }
            
        }
    }
    
    class func loadPokemonInfo(name: String?, id: Int, onComplete: @escaping (pokemonDetail?) -> Void) {

        let url = basePath + "\(name!)/"
         print(url)
        AF.request(url).responseJSON { (response) in
            guard let data = response.data else {
                onComplete(nil)
                return
            }
            do {
                let infoList = try JSONDecoder().decode(pokemonDetail.self, from: data)
                onComplete(infoList)
            }catch{
                print("loadPokemonDetailErro: \(error.localizedDescription)")
                onComplete(nil)
            }
            
        }
    }
}
