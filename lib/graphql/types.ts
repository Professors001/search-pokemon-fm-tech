export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface Evolution {
  id: string;
  name: string;
  image: string;
}

export interface Height {
  minimum: string;
  maximum: string;
}

export interface Weight {
  minimum: string;
  maximum: string;
}

export interface Pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  types: string[];
  classification: string;
  height: Height;
  weight: Weight;
  attacks: Attacks;
  evolutions: Evolution[] | null;
}

export interface GetPokemonVariables {
  name: string;
}

export interface GetPokemonResponse {
  pokemon: Pokemon | null;
}
