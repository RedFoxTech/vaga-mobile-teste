import Foundation

public class PokemonResponse : Decodable {
    let abilities : [Abilities]?
	let form_name : String?
	let form_names : [String]?
	let form_order : Int?
	let id : Int?
	let is_battle_only : Bool?
	let is_default : Bool?
	let is_mega : Bool?
	let name : String?
	let names : [String]?
	let order : Int?
	let pokemon : Pokemon?
	let sprites : Sprites?
    let results : [Results]?


}


