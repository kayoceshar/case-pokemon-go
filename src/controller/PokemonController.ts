import { Request, Response } from 'express';
import { PokemonBusiness } from '../business/PokemonBusiness';
import { InputDTO } from '../model/pokemon';

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}
  public getAllPokemons = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const page = req.body.page;
      const result = await this.pokemonBusiness.getAllPokemons(page);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonByName = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const name = req.params.name as string;
      const result = await this.pokemonBusiness.getPokemonByName(name);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonsByType = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const type = req.params.type as string;
      const result = await this.pokemonBusiness.getPokemonsByType(type);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getPokemonByTwoTypes = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const input: InputDTO = {
        type1: req.body.type1,
        type2: req.body.type2,
      };
      const result = await this.pokemonBusiness.getPokemonByTwoTypes(input);
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public countAllPokemons = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const result = await this.pokemonBusiness.countAllPokemons();
      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
