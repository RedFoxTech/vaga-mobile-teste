export interface IPokemon {
  name: string;
  url: string;
  types?: string[];
  moves?: string[];
  abilities?: string[];
  stats?: IPokemonStats;
}

export interface IPokemonStats {
  height: number;
  weight: number;
  attack: number;
  defense: number;
  specialAttack: number;
  pecialDefense: number;
  speed: number;
  hp: number;
}
