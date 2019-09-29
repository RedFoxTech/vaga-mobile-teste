import Foundation

public class Types : Decodable {
	let slot : Int?
	let type : Type?

}

public class Type : Decodable {
    let name : String?
    let url : String?
}
