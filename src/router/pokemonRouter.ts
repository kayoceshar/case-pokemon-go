import express from "express";
import { PokemonController } from "../controller/PokemonController";

const pokemonController = new PokemonController()

export const pokemonRouter = express.Router();

pokemonRouter.get('/allpokemons', pokemonController.getAllPokemons)