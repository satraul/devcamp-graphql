import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Pokemon = new GraphQLObjectType({
    name: 'Pokemon',
    fields: {
        // products: { type: new GraphQLList(ProductType) },
        data: { type: GraphQLJSON },
    }
})

const PokemonDetail = new GraphQLObjectType({
    name: 'PokemonDetail',
    fields: {
        data: { type: GraphQLJSON },
    }
})

export { Pokemon, PokemonDetail }