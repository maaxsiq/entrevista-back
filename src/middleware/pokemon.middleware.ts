import { Injectable, NestMiddleware } from "@nestjs/common";
import axios, { AxiosError } from "axios";
import { Request, Response, NextFunction } from "express";
import { PokemonAPIResponse } from "../types/pokemon";

@Injectable()
export class PokemonMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const pokemon = typeof req.query.pokemon === "string" ? req.query.pokemon : null;

    if (!pokemon) {
      res.status(400).json({ message: "Use ?pokemon=pikachu" });
      return;
    }

    try {
      const response = await axios.get<PokemonAPIResponse>(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      const abilities = response.data.abilities
        .map((item) => item.ability.name)
        .sort((a, b) => a.localeCompare(b));

      req.pokemonAbilities = abilities;

      next();
    } catch (error: unknown) {
      const message = this.formatAxiosError(error);

      res.status(500).json({
        message: "Erro ao buscar Pokémon",
        error: message
      });
    }
  }

  private formatAxiosError(error: unknown): string {
    if (error instanceof AxiosError) {
      return typeof error.response?.data === "string"
        ? error.response.data
        : error.message;
    }

    if (error instanceof Error) {
      return error.message;
    }

    return "Erro desconhecido";
  }
}
