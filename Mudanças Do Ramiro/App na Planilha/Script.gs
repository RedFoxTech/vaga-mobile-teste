function onOpen() {
  
  var UI = SpreadsheetApp.getUi();
  UI.createMenu("PokeAPI").addItem("Initialize Pokédex", "AddFunctionality").addToUi();
  
};

function AddFunctionality() {
  
  var UserTriggers = ScriptApp.getUserTriggers(SpreadsheetApp.getActiveSpreadsheet())
  
  for(var Trigger = 0; Trigger < UserTriggers.length; Trigger++) {
    
    ScriptApp.deleteTrigger(UserTriggers[Trigger])
    
  };
  
  ScriptApp.newTrigger("DisplayLoading").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create();
  ScriptApp.newTrigger("DisplayPokeInfo").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create();
  ScriptApp.newTrigger("GetMoves").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create();
  
};

function DisplayLoading() {
  
  var Sheet = SpreadsheetApp.getActiveSheet();
  
  var NameRange = Sheet.getRange("B2");
  var SpriteRange = Sheet.getRange("C2");
  var ShinySpriteRange = Sheet.getRange("C8");
  var ModelRange = Sheet.getRange("A15");
  var ShinyModelRange = Sheet.getRange("C15");
  var TypeARange = Sheet.getRange("B3");
  var TypeBRange = Sheet.getRange("B4");
  var FlavorRange = Sheet.getRange("A9");
  var AbilityARange = Sheet.getRange("B5");
  var AbilityBRange = Sheet.getRange("B6");
  var AbilityCRange = Sheet.getRange("B7");
  
  Sheet.getRange("A23:D" + Sheet.getMaxRows().toString()).clear();
  
  NameRange.setValue("Carregando...");
  SpriteRange.setValue("Carregando...");
  ShinySpriteRange.setValue("Carregando...");
  ModelRange.setValue("Carregando...");
  ShinyModelRange.setValue("Carregando...");
  TypeARange.setValue("Carregando...");
  TypeBRange.setValue("Carregando...");
  FlavorRange.setValue("Carregando...");
  AbilityARange.setValue("Carregando...");
  AbilityBRange.setValue("Carregando...");
  AbilityCRange.setValue("Carregando...");
  
};

function DisplayPokeInfo() {
  
  var PokemonTypes = {
    
    "ground": "Solo",
    "bug": "Inseto",
    "dragon": "Dragão",
    "electric": "Elétrico",
    "fighting": "Lutador",
    "fire": "Fogo",
    "flying": "Voador",
    "ghost": "Fantasma",
    "grass": "Grama",
    "water": "Água",
    "ice": "Gelo",
    "fairy": "Fada",
    "steel": "Aço",
    "dark": "Trevas",
    "psychic": "Psiquico",
    "rock": "Rocha",
    "poison": "Veneno",
    "normal": "Normal"
    
  };
  
  var Sheet = SpreadsheetApp.getActiveSheet();
  var DexNumber = String(Sheet.getRange("B1").getValue())
  var NameRange = Sheet.getRange("B2");
  var SpriteRange = Sheet.getRange("C2");
  var ShinySpriteRange = Sheet.getRange("C8");
  var ModelRange = Sheet.getRange("A15");
  var ShinyModelRange = Sheet.getRange("C15");
  var TypeARange = Sheet.getRange("B3");
  var TypeBRange = Sheet.getRange("B4");
  var FlavorRange = Sheet.getRange("A9");
  
  var PokeURL = "https://pokeapi.co/api/v2/pokemon/" + DexNumber;
  var PokeResponse = UrlFetchApp.fetch(PokeURL);
  
  var MovesURL = "https://pokeapi.co/api/v2/move/";
  
  var PokeTypeA;
  var PokeTypeB;
  
  var NormalModelsURL = "https://play.pokemonshowdown.com/sprites/dex/";
  var ShinyModelsURL = "https://play.pokemonshowdown.com/sprites/dex-shiny/";
  
  var FlavorURL = "https://pokeapi.co/api/v2/pokemon-species/";
  var FlavorResponse = UrlFetchApp.fetch(FlavorURL + DexNumber);
  
  function GetFlavorTexts() {
    
    for(var FT = 0; FT < JSON.parse(FlavorResponse).flavor_text_entries.length; FT++) {
      
      if(JSON.parse(FlavorResponse).flavor_text_entries[FT].language.name == "en") {
        
        FlavorRange.setValue(LanguageApp.translate(JSON.parse(FlavorResponse).flavor_text_entries[FT].flavor_text, "en", "pt"));
        
      };
      
    };
    
  };

  function GetTypes() {
    
    if(JSON.parse(PokeResponse).types[0] != null) {
      
      PokeTypeA = JSON.parse(PokeResponse).types[0].type.name;
      
    } else {
      
      PokeTypeA = " ----- ";
      
    };
    
    if(JSON.parse(PokeResponse).types[1] != null) {
      
      PokeTypeB = JSON.parse(PokeResponse).types[1].type.name;
      
    } else {
      
      PokeTypeB = " ----- ";
      
    };
    
  };
  
  function TranslateTypes() {
    
    if(PokemonTypes[PokeTypeA] != null) {
      
      PokeTypeA = PokemonTypes[PokeTypeA];
      
    };
    
    if(PokemonTypes[PokeTypeB] != null) {
      
      PokeTypeB = PokemonTypes[PokeTypeB];
      
    };
    
  };
  
  function ValidateWeirdNames() {
    
    switch(PokeName) {
        
      case "kommo-o":
        
        PokeName = "kommoo";
        break;
        
      case "jangmo-o":
        
        PokeName = "jangmoo";
        break;
        
      case "hakamo-o":
        
        PokeName = "hakamoo";
        break;
        
      case "tapu-fini":
        
        PokeName = "tapufini";
        break;
        
      case "tapu-koko":
        
        PokeName = "tapukoko";
        break;
        
      case "tapu-bulu":
        
        PokeName = "tapubulu";
        break;
        
      case "tapu-lele":
        
        PokeName = "tapulele";
        break;
        
    };
    
  };
  
  function Update3DModels() {
    
    ShinyModelRange.setValue("=image(" + '"' + ShinyModelsURL + PokeName + ".png" + '"' + ")");
    
    try {
      
      if(UrlFetchApp.fetch(NormalModelsURL + PokeName + ".png").getResponseCode() == 200) {
        
        ModelRange.setValue("=image(" + '"' + NormalModelsURL + PokeName + ".png" + '"' + ")");
        
      };
      
    } catch(error) {
      
      ModelRange.setValue("Parece que o modelo 3D deste Pokémon não está disponível no banco de dados do Pokémon Showdown. Mas não tema! Assim que atualizarem o banco de dados o modelo 3D aparecerá aqui! :)");
      
    };
    
    try {
      
      if(UrlFetchApp.fetch(ShinyModelsURL + PokeName + ".png").getResponseCode() == 200) {
        
        ShinyModelRange.setValue("=image(" + '"' + ShinyModelsURL + PokeName + ".png" + '"' + ")");
        
      };
      
    } catch(error) {
      
      ShinyModelRange.setValue("Parece que o modelo 3D shiny deste Pokémon não está disponível no banco de dados do Pokémon Showdown. Mas não tema! Assim que o bano de dados for atualizado o modelo 3D aparecerá aqui! :)");
      
    };
    
  };
  
  var AbilityARange = Sheet.getRange("B5");
  var AbilityBRange = Sheet.getRange("B6");
  var AbilityCRange = Sheet.getRange("B7");
  
  var PokeAbilityA;
  var PokeAbilityB;
  var PokeAbilityC;
  
  function GetAbilities() {
    
    if(JSON.parse(PokeResponse).abilities[0] != null) {
      
      PokeAbilityA = "=proper(" + '"' + JSON.parse(PokeResponse).abilities[0].ability.name + '"' + ")";
      
    } else {
      
      PokeAbilityA = "-----";
      
    };
    
    if(JSON.parse(PokeResponse).abilities[1] != null) {
      
      PokeAbilityB = "=proper(" + '"' + JSON.parse(PokeResponse).abilities[1].ability.name + '"' + ")";
      
    } else {
      
      PokeAbilityB = "-----";
      
    };
    
    if(JSON.parse(PokeResponse).abilities[2] != null) {
      
      PokeAbilityC = "=proper(" + '"' + JSON.parse(PokeResponse).abilities[2].ability.name + '"' + ")";
      
    } else {
      
      PokeAbilityC = "-----";
      
    };
                                
    AbilityARange.setValue(PokeAbilityA);
    AbilityBRange.setValue(PokeAbilityB);
    AbilityCRange.setValue(PokeAbilityC);
    
  };
  
  var PokeAbilityA;
  var PokeAbilityB;
  var PokeAbilityC;
  
  var PokeName = JSON.parse(PokeResponse).name;
  var PokeSprite = JSON.parse(PokeResponse).sprites.front_default;
  var PokeShinySprite = JSON.parse(PokeResponse).sprites.front_shiny;
  
  GetFlavorTexts();
  GetAbilities();
  GetTypes();
  TranslateTypes();
  ValidateWeirdNames();
  Update3DModels();
  
  TypeARange.setValue(PokeTypeA);
  TypeBRange.setValue(PokeTypeB);
  NameRange.setValue("=proper(" + '"' + PokeName + '"' + ")");
  SpriteRange.setValue("=image(" + '"' + PokeSprite + '"' + ")");
  ShinySpriteRange.setValue("=image(" + '"' + PokeShinySprite + '"' + ")");
                       
}

function GetMoves() {
  
  var Sheet = SpreadsheetApp.getActiveSheet();
  var DexNumber = String(Sheet.getRange("B1").getValue())
  var PokeURL = "https://pokeapi.co/api/v2/pokemon/" + DexNumber;
  var PokeResponse = UrlFetchApp.fetch(PokeURL);
  var MovesURL = "https://pokeapi.co/api/v2/move/"
    
  for(var PM = 0; PM < JSON.parse(PokeResponse).moves.length; PM++) {
      
    var CurrentRow = 23 + PM;
    var MovesResponse = UrlFetchApp.fetch(MovesURL + JSON.parse(PokeResponse).moves[PM].move.name);
    
    var TypeCellName = "A" + CurrentRow.toString();
    var NameCellName = "B" + CurrentRow.toString();
    var DamageCellName = "C" + CurrentRow.toString();
    var AccuracyCellName = "D" + CurrentRow.toString();
    
    Sheet.getRange(TypeCellName).setValue("=proper(" + '"' + JSON.parse(MovesResponse).type.name + '"' + ")"); 
    Sheet.getRange(NameCellName).setValue("=proper(" + '"' + JSON.parse(PokeResponse).moves[PM].move.name + '"' + ")");
    Sheet.getRange(DamageCellName).setValue("=proper(" + '"' + JSON.parse(MovesResponse).power + '"' + ")");
    Sheet.getRange(AccuracyCellName).setValue("=proper(" + '"' + JSON.parse(MovesResponse).accuracy + '"' + ")");
    
    if(PM == JSON.parse(PokeResponse).moves.length - 1) {
      
      Sheet.getRange("A" + (CurrentRow + 1).toString() + ":D" + Sheet.getMaxRows().toString()).clear();
      
    };
      
  };
    
};
