import path from 'path'
import 'graphql-import-node'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = loadFilesSync(path.join(__dirname, './schemas'))

const mergeTypeDefsArray = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'))

const mergeResolversArray = mergeResolvers(resolversArray);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefsArray,
    resolvers: mergeResolversArray
});



