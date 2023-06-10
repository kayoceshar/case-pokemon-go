import express from "express";
import { PokemonController } from "../controller/PokemonController";

const pokemonController = new PokemonController()

export const pokemonRouter = express.Router();

pokemonRouter.get('/allpokemons', pokemonController.getAllPokemons)
pokemonRouter.get('/:name', pokemonController.getPokemonByName)
pokemonRouter.get('/type/:type', pokemonController.getPokemonsByType)
pokemonRouter.get('/types/pokemons', pokemonController.getPokemonByTwoTypes)
pokemonRouter.get('/count/pokemons', pokemonController.countAllPokemons)