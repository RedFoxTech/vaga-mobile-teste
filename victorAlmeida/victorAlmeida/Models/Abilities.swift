
import Foundation

public class Abilities : Decodable {
	let ability : Ability?
	let is_hidden : Bool?
	let slot : Int?
}


public class Ability : Decodable {
    let name : String?
    let url : String?
}
