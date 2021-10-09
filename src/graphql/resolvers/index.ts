const { mergeResolvers } = require('@graphql-tools/merge');
import game from './game'
import character from './character'

const resolversArray = [
    game,
    character,
];

const resolvers = mergeResolvers(resolversArray)

export default resolvers