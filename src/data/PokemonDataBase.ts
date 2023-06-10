import { InputDTO } from "../model/pokemon"
import { BaseDatabase } from "./BaseDataBase"

export class PokemonDataBase extends BaseDatabase {
  private table = 'Pokemon_go'

  public getAllPokemons = async () => {
    const result = await PokemonDataBase.connection(this.table)               
    return result
  }

  public getPokemonByName = async (name: string) => {
   const result = await PokemonDataBase.connection(this.table)   
   .where('Name', 'like', `%${name}%`)
   return result
  }

  public getPokemonsByType = async (type: string) => {
    const result = await PokemonDataBase.connection(this.table)
    .where('Type_1', 'like', `%${type}%`).orWhere('Type_2', 'like', `%${type}%`)
    return result 
   }

   public getPokemonByTwoTypes = async (input: InputDTO) => {
    const result = await PokemonDataBase.connection(this.table)
    .where({ Type_1: input.type1, Type_2: input.type2}).orWhere({ Type_1: input.type2, Type_2: input.type1})
    return result
   }

   public countAllPokemons = async () => {
    const result = await PokemonDataBase.connection(this.table)
    .count('*',{as: 'Currently there are a total of:'})         
    return result[0]
  }

}