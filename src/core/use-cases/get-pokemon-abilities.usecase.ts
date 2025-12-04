import { PokemonRepository } from "../repositories/pokemon.repository";

export class GetPokemonAbilitiesUseCase {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(nameOrId: string): Promise<string[]> {
    return this.repository.getAbilities(nameOrId);
  }
}
