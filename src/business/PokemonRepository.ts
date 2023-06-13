import { InputDTO, pokemon } from "../model/pokemon"


export interface PokemonRepository {
  getAllPokemons(page: number):Promise<pokemon[]>;
  getPokemonByName(name: string):Promise<pokemon[]>;
  getPokemonsByType(type: string):Promise<pokemon[]>;
  getPokemonByTwoTypes(input: InputDTO):Promise<pokemon[]>;
  countAllPokemons():Promise<any>;
}




