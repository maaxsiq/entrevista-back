import { Injectable } from "@nestjs/common";
import axios from "axios";
import { PokemonRepository } from "../../core/repositories/pokemon.repository";

interface AbilityEntry {
  ability: { name: string };
}

interface PokeApiResponse {
  abilities: AbilityEntry[];
}

@Injectable()
export class PokemonApiService implements PokemonRepository {
  async getAbilities(nameOrId: string): Promise<string[]> {
    const response = await axios.get<PokeApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    );

    return response.data.abilities
      .map((a) => a.ability.name)
      .sort((a, b) => a.localeCompare(b));
  }
}
