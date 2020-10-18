extends Node2D

onready var PokeRequest = HTTPRequest.new()
onready var MovesRequest = HTTPRequest.new()
onready var SpritesRequest = HTTPRequest.new()
onready var ShinySpritesRequest = HTTPRequest.new()
onready var ModelsRequest = HTTPRequest.new()
onready var ShinyModelsRequest = HTTPRequest.new()

onready var LoadingNode = self.get_node("UI/PokemonMoves/LoadingContainer/Loading")

onready var MovesThread = Thread.new()
onready var CurrentMoveName = ""
onready var CurrentMoveType = ""
onready var CurrentMovePower = ""
onready var CurrentMoveAccuracy = ""
onready var MoveInformationSet = false
onready var MovesLoaded = 0

onready var PokeURL = "https://pokeapi.co/api/v2/pokemon/"
onready var MovesURL = "https://pokeapi.co/api/v2/move/"
onready var ModelsURL = "https://play.pokemonshowdown.com/sprites/dex/"
onready var ShinyModelsURL = "https://play.pokemonshowdown.com/sprites/dex-shiny/"

onready var PokeballIcon = preload("res://Pokeball Icon.png")

onready var CurrentPokeURL

onready var MoveResource = preload("res://Move.tscn")

func GetPokemonName(Info):
	
	$UI/Search/LineEdit.text = String(Info.species.name).capitalize()
	
	pass
	
func GetMoves(PokemonMoves):
	
	self.call_deferred("ShowLoadingScreen")
	
	for Move in self.get_node("UI/PokemonMoves/PokemonMovesContainer/PokemonMoves").get_children():
		
		Move.queue_free()
		
	MovesLoaded = 0
	
	for PokeMove in PokemonMoves[0].size():
		
		LoadingNode.get_node("VBoxContainer/Progress").max_value = PokemonMoves[0].size()
		LoadingNode.get_node("VBoxContainer/Progress").value = MovesLoaded + 1
		
		MovesRequest.request(PokemonMoves[0][PokeMove].move.url)
		
		while(!MoveInformationSet):
			
			continue
			
		self.call_deferred("AddMove", CurrentMoveName, CurrentMoveType, CurrentMovePower, CurrentMoveAccuracy)
		MovesLoaded += 1
		MoveInformationSet = false
		
	self.call_deferred("HideLoadingScreen")
	self.call_deferred("StopMoveThread")
	
	pass
	
func HideLoadingScreen():
	
	$UI/PokemonMoves/LoadingContainer.visible = false
	$UI/PokemonMoves/PokemonMoves.visible = true
	$UI/PokemonMoves/PokemonMovesContainer.visible = true
	
	pass
	
func ShowLoadingScreen():
	
	$UI/PokemonMoves/PokemonMoves.visible = false
	$UI/PokemonMoves/PokemonMovesContainer.visible = false
	$UI/PokemonMoves/LoadingContainer.visible = true
	
	pass
	
func StopMoveThread():
	
	MovesThread.wait_to_finish()
	
	pass
	
func AddMove(MoveName, MoveType, MovePower, MoveAccuracy):
	
	var NewMove = MoveResource.instance()
	
	$UI/PokemonMoves/PokemonMovesContainer/PokemonMoves.add_child(NewMove)
	
	if(MoveName != null):
		
		NewMove.get_node("Name").text = String(MoveName)
		
	else:
		
		NewMove.get_node("Name").text = String("-----")
		
	if(MoveType != null):
		
		NewMove.get_node("Type").text = String(MoveType)
		
	else:
		
		NewMove.get_node("Type").text = String("-----")
		
	if(MovePower != null):
		
		NewMove.get_node("Power").text = String(MovePower)
		
	else:
		
		NewMove.get_node("Power").text = String("-----")
		
	if(MoveAccuracy != null):
		
		NewMove.get_node("Accuracy").text = String(MoveAccuracy)
		
	else:
		
		NewMove.get_node("Accuracy").text = String("-----")
	
	pass
	
func SearchPokemon():
	
	$UI/PokemonSprites/Sprite.texture = PokeballIcon
	$UI/PokemonSprites/ShinySprite.texture = PokeballIcon
	$UI/PokemonModels/Model.texture = PokeballIcon
	$UI/PokemonModels/ShinyModel.texture = PokeballIcon
	
	if(int($UI/Search/LineEdit.text) != 0):
		
		CurrentPokeURL = PokeURL + String(int($UI/Search/LineEdit.text))
		
	else:
		
		CurrentPokeURL = PokeURL + String($UI/Search/LineEdit.text).to_lower()
		
	if(PokeRequest.request(CurrentPokeURL) == OK):
		
		PokeRequest.request(CurrentPokeURL)
		
	pass

func _ready():
	
	$Requests.add_child(PokeRequest)
	$Requests.add_child(MovesRequest)
	$Requests.add_child(SpritesRequest)
	$Requests.add_child(ShinySpritesRequest)
	$Requests.add_child(ModelsRequest)
	$Requests.add_child(ShinyModelsRequest)
	
	$UI/Search/Button.connect("pressed", self, "SearchPokemon")
	PokeRequest.connect("request_completed", self, "CompletedPokeRequest")
	MovesRequest.connect("request_completed", self, "CompletedMovesRequest")
	ModelsRequest.connect("request_completed", self, "CompletedModelsRequest")
	ShinyModelsRequest.connect("request_completed", self, "CompletedShinyModelsRequest")
	SpritesRequest.connect("request_completed", self, "CompletedSpriteRequest")
	ShinySpritesRequest.connect("request_completed", self, "CompletedShinySpriteRequest")
	
	pass
	
func CompletedPokeRequest(result, responsecode, headers, body):
	
	var PokeInfo = parse_json(body.get_string_from_utf8())
	
	if(result == HTTPRequest.RESULT_SUCCESS && responsecode == 200):
		
		if(PokeInfo.name != null):
			
			GetPokemonName(parse_json(body.get_string_from_utf8()))
			
		if(PokeInfo.sprites.front_default != null):
			
			SpritesRequest.request(PokeInfo.sprites.front_default)
			
		if(PokeInfo.sprites.front_shiny != null):
			
			ShinySpritesRequest.request(PokeInfo.sprites.front_shiny)
			
		ModelsRequest.request(ModelsURL + PokeInfo.name + ".png")
		ShinyModelsRequest.request(ShinyModelsURL + PokeInfo.name + ".png")
		
		MovesThread.start(self, "GetMoves", [PokeInfo.moves])
		
	pass
	
func CompletedMovesRequest(result, responsecode, headers, body):
	
	var MoveData = parse_json(body.get_string_from_utf8())
	
	if(MoveData.name != null):
		
		CurrentMoveName = MoveData.name
		
	else:
		
		CurrentMoveName = null
		
	if(MoveData.power != null):
		
		CurrentMovePower = MoveData.power
		
	else:
		
		CurrentMovePower = null
		
	if(MoveData.accuracy != null):
		
		CurrentMoveAccuracy = MoveData.accuracy
		
	else:
		
		CurrentMoveAccuracy = null
		
	if(MoveData.type.name != null):
		
		CurrentMoveType = MoveData.type.name
		
	else:
		
		CurrentMoveType = null
		
	MoveInformationSet = true
	
	pass
	
func CompletedSpriteRequest(result, responsecode, headers, body):
	
	var SpriteInfo = body
	
	if(result == HTTPRequest.RESULT_SUCCESS && responsecode == 200):
		
		if(SpriteInfo != null):
			
			var SpriteImage = Image.new()
			SpriteImage.load_png_from_buffer(SpriteInfo)
			var SpriteTexture = ImageTexture.new()
			SpriteTexture.create_from_image(SpriteImage)
			
			$UI/PokemonSprites/Sprite.texture = SpriteTexture
			
	pass
	
func CompletedShinySpriteRequest(result, responsecode, headers, body):
	
	var SpriteInfo = body
	
	if(result == HTTPRequest.RESULT_SUCCESS && responsecode == 200):
		
		if(SpriteInfo != null):
			
			var SpriteImage = Image.new()
			SpriteImage.load_png_from_buffer(SpriteInfo)
			var SpriteTexture = ImageTexture.new()
			SpriteTexture.create_from_image(SpriteImage)
			
			$UI/PokemonSprites/ShinySprite.texture = SpriteTexture
			
	pass
	
func CompletedModelsRequest(result, responsecode, headers, body):
	
	var SpriteInfo = body
	
	if(result == HTTPRequest.RESULT_SUCCESS && responsecode == 200):
		
		if(SpriteInfo != null):
			
			var SpriteImage = Image.new()
			SpriteImage.load_png_from_buffer(SpriteInfo)
			var SpriteTexture = ImageTexture.new()
			SpriteTexture.create_from_image(SpriteImage)
			
			$UI/PokemonModels/Model.texture = SpriteTexture
			
	pass
	
func CompletedShinyModelsRequest(result, responsecode, headers, body):
	
	var SpriteInfo = body
	
	if(result == HTTPRequest.RESULT_SUCCESS && responsecode == 200):
		
		if(SpriteInfo != null):
			
			var SpriteImage = Image.new()
			SpriteImage.load_png_from_buffer(SpriteInfo)
			var SpriteTexture = ImageTexture.new()
			SpriteTexture.create_from_image(SpriteImage)
			
			$UI/PokemonModels/ShinyModel.texture = SpriteTexture
			
	pass

func _process(delta):
	
	if(MovesThread.is_active()):
		
		$UI/Search/Button.disabled = true
		
	else:
		
		$UI/Search/Button.disabled = false
		
	pass
