import {PokemonDataBase} from "../data/PokemonDataBase"
import { CustomError } from "../error/CustomError";


const pokemonDataBase = new PokemonDataBase()

export class PokemonBusiness {
  public getAllPokemons = async () => {
    try {
      const result = await pokemonDataBase.getAllPokemons();
      return result
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}