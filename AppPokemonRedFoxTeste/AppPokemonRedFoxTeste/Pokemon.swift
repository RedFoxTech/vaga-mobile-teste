//
//  Pokemon.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import Foundation
struct Response: Decodable {
    let count: Int
    let next: String
    let previous: String?
    let results: [Pokemon]
}

struct Pokemon: Decodable {
    let name: String
    let url: String
}

struct ResponseIndividual: Decodable {
    let sprites: Sprites
}

struct Sprites: Decodable {
    let front_default: String
    let back_default: String
}
