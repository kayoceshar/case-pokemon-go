import { PokemonDataBase } from '../data/PokemonDataBase';
import { CustomError } from '../error/CustomError';
import {
  NameNotFound,
  NoExistingPokemon,
  NoExistingType,
  TypeNotFound,
} from '../error/pokemonErrors';
import { InputDTO } from '../model/pokemon';

const pokemonDataBase = new PokemonDataBase();

export class PokemonBusiness {
  public getAllPokemons = async (page: number) => {
    try {
      if (!page || page === 0) {
        page = 1;
      }
      const size = 20;
      const offset = size * (Number(page) - 1);
      const result = await pokemonDataBase.getAllPokemons(offset);
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonByName = async (name: string) => {
    try {
      if (!name) {
        throw new NameNotFound();
      }

      const result = await pokemonDataBase.getPokemonByName(name);

      if (result === undefined) {
        throw new NoExistingPokemon();
      }

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonsByType = async (type: string) => {
    try {
      if (!type) {
        throw new TypeNotFound();
      }

      console.log(type);

      const result = await pokemonDataBase.getPokemonsByType(type);

      if (result === undefined) {
        throw new NoExistingType();
      }

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public getPokemonByTwoTypes = async (input: InputDTO) => {
    try {
      const { type1, type2 } = input;

      const result = await pokemonDataBase.getPokemonByTwoTypes(input);
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  public countAllPokemons = async () => {
    try {
      const result = await pokemonDataBase.countAllPokemons();
      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
