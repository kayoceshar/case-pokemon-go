import { PokemonDataBase } from '../data/PokemonDataBase';
import { CustomError } from '../error/CustomError';
import {
  NameNotFound,
  NoExistingPokemon,
  NoExistingType,
  TypeNotFound,
} from '../error/pokemonErrors';
import { InputDTO, pokemon } from '../model/pokemon';
import { PokemonRepository } from './PokemonRepository';


export class PokemonBusiness {
  constructor(
      private pokemonDataBase: PokemonRepository
  ){}
  public getAllPokemons = async (page: number):Promise<pokemon[]> => {
    try {
      if (!page || page <= 0) {
        page = 1;
      }
      const size = 20;
      const offset = size * (Number(page) - 1);
      const result = await this.pokemonDataBase.getAllPokemons(offset);
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonByName = async (name: string):Promise<pokemon[]> => {
    try {
      if (!name) {
        throw new NameNotFound();
      }

      const result = await this.pokemonDataBase.getPokemonByName(name);

      if (result === undefined) {
        throw new NoExistingPokemon();
      }
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonsByType = async (type: string):Promise<pokemon[]> => {
    try {
      if (!type) {
        throw new TypeNotFound();
      }

      const result = await this.pokemonDataBase.getPokemonsByType(type);

      if (result.length === 0) {
        throw new NoExistingType();
      }

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonByTwoTypes = async (input: InputDTO):Promise<pokemon[]> => {
    try {
      const { type1, type2 } = input;

      if (!input.type1) {
        input.type1 = '';
      }

      if (!input.type2) {
        input.type2 = '';
      }

      const result = await this.pokemonDataBase.getPokemonByTwoTypes(input);
      if (result.length === 0) {
        throw new NoExistingType();
      }
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public countAllPokemons = async ():Promise<any> => {
    try {
      const result = await this.pokemonDataBase.countAllPokemons();
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
