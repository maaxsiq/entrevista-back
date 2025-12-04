import { Controller, Get, Req } from "@nestjs/common";
import express from "express";

@Controller("pokemon")
export class AppController {
  @Get()
  getPokemon(@Req() req: express.Request) {
    return {
      abilities: req.pokemonAbilities ?? [],
    };
  }
}
