import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import axios from 'axios';
import { Pokemon, PokemonDetail } from '../../types/Pokemon';

const GetPokemon = {
  type: Pokemon,
  args: {
    offset: { type: GraphQLInt, defaultValue: 1 },
    limit: { type: GraphQLInt, defaultValue: 10 },
  },
  resolve: async (_, args) => {
    const { offset, limit } = args;
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=' + offset + '&limit=' + limit;
    const result = await axios.get(url);
    console.log(result);
    return {
      data: result.data,
    }
  }


}

const GetPokemonDetail = {
  type: PokemonDetail,
  args: {
    id: { type: GraphQLInt, defaultValue: -1 },
    name: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const { id, name } = args;
    slug = (id == -1 ? name : id);
    let url = 'https://pokeapi.co/api/v2/pokemon/' + slug;
    const result = await axios.get(url);
    console.log(result);
    return {
      data: result.data,
    }
  }
}

export { GetPokemon, GetPokemonDetail }