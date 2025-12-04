import { IsString, MinLength } from "class-validator";

export class GetPokemonDto {
  @IsString()
  @MinLength(1)
  pokemon!: string;
}
