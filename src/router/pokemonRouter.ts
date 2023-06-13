import express from 'express';
import { PokemonController } from '../controller/PokemonController';
import { PokemonDataBase } from '../data/PokemonDataBase';
import { PokemonBusiness } from '../business/PokemonBusiness';

export const pokemonRouter = express.Router();

const pokemonDataBase = new PokemonDataBase();
const pokemonBusiness = new PokemonBusiness(pokemonDataBase);
const pokemonController = new PokemonController(pokemonBusiness);

pokemonRouter.get('/allpokemons', (req, res) =>
  pokemonController.getAllPokemons(req, res),
);
pokemonRouter.get('/:name', (req, res) =>
  pokemonController.getPokemonByName(req, res),
);
pokemonRouter.get('/type/:type', (req, res) =>
  pokemonController.getPokemonsByType(req, res),
);
pokemonRouter.get('/types/pokemons', (req, res) =>
  pokemonController.getPokemonByTwoTypes(req, res),
);
pokemonRouter.get('/count/pokemons', (req, res) =>
  pokemonController.countAllPokemons(req, res),
);
