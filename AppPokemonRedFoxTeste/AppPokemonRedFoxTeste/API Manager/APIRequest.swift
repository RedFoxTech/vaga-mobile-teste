//
//  ApiRequest.swift
//  AppPokemonRedFoxTeste
//
//  Created by Kaled Jamal El Azanki on 24/03/20.
//  Copyright © 2020 Kaled Azanki. All rights reserved.
//

import UIKit
class APIRequest {
    
    static private let session = URLSession(configuration: .default)
    
    typealias pokemonsResponse = (ResponseEnum<Response>) -> Void
    typealias pokemonResponse = (ResponseEnum<ResponseIndividual>) -> Void
    typealias imageCompletionHandler = (ResponseEnum<UIImage>) -> Void
    
    static func getPokemons(url: String = APISupport.baseURL.rawValue, completion: @escaping pokemonsResponse) {
            
        let url = endPoint(url: url)
        
        let task = session.dataTask(with: url) { data, _ , error in
            
            let decoder = JSONDecoder()
            
            do {
                let response = try decoder.decode(Response.self, from: data!)
                completion(ResponseEnum.success(response))
            } catch {
                completion(ResponseEnum.error("mensagem de erro"))            }
        }
        task.resume()
    }
    
    static func getPokemonFor(name: String ,completion: @escaping pokemonResponse) {
            
        let url = endPoint(url: "\(APISupport.baseURLImg.rawValue)\(name)")
        
        let task = session.dataTask(with: url) { data, _ , error in
            
            let decoder = JSONDecoder()
            
            do {
                let response = try decoder.decode(ResponseIndividual.self, from: data!)
                completion(ResponseEnum.success(response))
            } catch {
                completion(ResponseEnum.error("mensagem de erro"))
            }
            
        }
        task.resume()
    }
    
    static func downloadImage(url: String, completion: @escaping (imageCompletionHandler)){

        let endpoint = self.endPoint(url: url)

        let task = session.dataTask(with: URLRequest(url: endpoint)) { (data, _, error) in

            if error != nil {
                completion(ResponseEnum.error(error!.localizedDescription))
            }else{
                let image = UIImage(data: data!)

                if let image = image {
                    completion(ResponseEnum.success(image))
                }else{
                    completion(ResponseEnum.success(UIImage(named: "notfound")!))
                }
            }
        }
        task.resume()
    }
    
    static private func endPoint(url: String) -> URL{
        guard let baseUrl = URL(string: url) else {
            return URL(fileURLWithPath: "")
        }
        return baseUrl
    }
     
}
