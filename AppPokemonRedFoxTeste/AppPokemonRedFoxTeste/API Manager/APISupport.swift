//
//  APISupport.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import Foundation
enum APISupport: String {
    case baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    
    case baseURLImg = "https://pokeapi.co/api/v2/pokemon/"
}

enum ResponseEnum<T> {
    
    case success(T)
    case error(String)

}
