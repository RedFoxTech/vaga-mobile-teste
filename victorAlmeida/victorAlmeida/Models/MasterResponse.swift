import Foundation

public class MasterResponse : Decodable {
	let count : Int?
	let next : String?
	let previous : String?
	let results : [Results]?
    let pokemonResults : PokemonResponse?

}

public class Results: Decodable{
    let url : String?
    let name : String?
}
