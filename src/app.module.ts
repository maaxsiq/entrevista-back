import { Module } from "@nestjs/common";
import { PokemonModule } from "./pokemon.module";

@Module({
  imports: [PokemonModule],
})
export class AppModule {}
