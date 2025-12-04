export interface PokemonRepository {
  getAbilities(nameOrId: string): Promise<string[]>;
}
