import { CustomError } from "./CustomError";

export class NameNotFound extends CustomError{
  constructor(){
      super(422, "It is necessary to inform the name of the pokemon.")
  }
}

export class TypeNotFound extends CustomError{
  constructor(){
      super(422, "It is necessary to inform the type of the pokemon.")
  }
}

export class NoExistingPokemon extends CustomError{
  constructor(){
      super(404, "Pokemon does not exist.")
  }
}

export class NoExistingType extends CustomError{
  constructor(){
      super(404, "Pokemon type does not exist.")
  }
}