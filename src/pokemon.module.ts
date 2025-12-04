import { Module } from "@nestjs/common";
import { PokemonController } from "./interface/http/pokemon.controller";
import { PokemonApiService } from "./infrastructure/services/pokemon-api.service";

@Module({
  controllers: [PokemonController],
  providers: [PokemonApiService],
})
export class PokemonModule {}
