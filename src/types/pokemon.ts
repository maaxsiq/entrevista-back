export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonAPIResponse {
  abilities: PokemonAbility[];
}
