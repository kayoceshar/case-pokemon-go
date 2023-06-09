import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";


const pokemonBusiness = new PokemonBusiness()

export class PokemonController {
  public getAllPokemons = async(req: Request, res: Response) => {
    try {
        const result = await pokemonBusiness.getAllPokemons()
        res.status(200).send(result);
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}