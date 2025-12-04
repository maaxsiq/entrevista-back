export interface RawPokemonResponse {
  name: string;
  abilities: { ability: { name: string } }[];
}

export class PokemonMapper {
  static toEntity(raw: RawPokemonResponse) {
    return {
      name: raw.name,
      abilities: raw.abilities.map((a) => a.ability.name),
    };
  }
}
