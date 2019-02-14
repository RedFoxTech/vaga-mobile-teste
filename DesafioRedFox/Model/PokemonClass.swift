//
//  PokemonList.swift
//  DesafioRedFox
//
//  Created by erick pisco on 11/02/19.
//  Copyright © 2019 erick pisco. All rights reserved.
//

import Foundation


struct pokemonList: Codable {
    let count: Int
    let next: String
    let previous: String?
    let results: [pokemonData]
    
}

struct pokemonData: Codable {
    let name: String
    let url: String
}

struct pokemonDetail: Codable {
    let name: String
    let id: Int
    let order: Int
    let sprites: pokemonSprites
    let stats:[pokemonStats]
    
}

struct pokemonSprites: Codable {
    let front_shiny: String
    let front_default: String
}

struct pokemonStats: Codable {
    let base_stat: Int
    let effort: Int
    let stat: nameStat
}

struct nameStat: Codable {
    let name: String
    let url: String
}
