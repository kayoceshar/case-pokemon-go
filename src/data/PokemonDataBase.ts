import { BaseDatabase } from "./BaseDataBase"

export class PokemonDataBase extends BaseDatabase {
  private table = 'Pokemon_go'

  public getAllPokemons = async () => {
    const result = await PokemonDataBase.connection(this.table)
    .limit(100)
    return result
  }

  public getPokemonByName = async (name: string) => {
   const result = await PokemonDataBase.connection(this.table)
   .where('Name', 'like', `%${name}%`)
   return result[0] 
  }

  public getPokemonsByType = async (type: string) => {
    const result = await PokemonDataBase.connection(this.table)
    .where({ Type_1: type }).orWhere({ Type_2: type})
    return result 
   }

   public getPokemonByTwoTypes = async (type1: string, type2: string) => {
    const result = await PokemonDataBase.connection(this.table)
    .where({ Type_1: type1, Type_2: type2}).orWhere({ Type_1: type2, Type_2: type1})
    return result
   }
}