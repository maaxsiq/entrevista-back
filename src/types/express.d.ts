import 'express';

declare module 'express' {
  interface Request {
    pokemonAbilities?: string[];
  }
}

declare module "express-serve-static-core" {
    interface Request {
        pokemonAbilities?: string[];
    }
}