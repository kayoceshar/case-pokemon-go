import { Request, Response } from 'express';
import { PokemonBusiness } from '../business/PokemonBusiness';
import { log } from 'console';
import { InputDTO } from '../model/pokemon';

const pokemonBusiness = new PokemonBusiness();

export class PokemonController {
  public getAllPokemons = async (req: Request, res: Response) => {
    try {
      const result = await pokemonBusiness.getAllPokemons();
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonByName = async (req: Request, res: Response) => {
    try {
      const name = req.params.name as string;
      const result = await pokemonBusiness.getPokemonByName(name);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonsByType = async (req: Request, res: Response) => {
    try {
      const type = req.params.type as string;
      const result = await pokemonBusiness.getPokemonsByType(type);
      res.status(200).send(result);
      console.log(type);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonByTwoTypes = async (req: Request, res: Response) => {
    try {
      const input: InputDTO = {
        type1: req.body.type1,
        type2: req.body.type2,
      };
      const result = await pokemonBusiness.getPokemonByTwoTypes(input);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public countAllPokemons = async (req: Request, res: Response) => {
    try {
      const result = await pokemonBusiness.countAllPokemons();
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };


}
