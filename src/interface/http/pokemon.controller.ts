import { Controller, Get, Query } from "@nestjs/common";
import { GetPokemonDto } from "../../application/dto/get-pokemon.dto";
import { PokemonApiService } from "../../infrastructure/services/pokemon-api.service";
import { GetPokemonAbilitiesUseCase } from "../../core/use-cases/get-pokemon-abilities.usecase";

@Controller("pokemon")
export class PokemonController {
  constructor(private readonly service: PokemonApiService) {}

  @Get()
  async get(@Query() query: GetPokemonDto) {
    const useCase = new GetPokemonAbilitiesUseCase(this.service);
    const abilities = await useCase.execute(query.pokemon);
    return { abilities };
  }
}
