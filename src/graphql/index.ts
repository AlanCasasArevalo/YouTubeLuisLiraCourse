import path from 'path'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import 'graphql-import-node'
import resolvers from "./resolvers";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from '@graphql-tools/load-files'

const typesArray = loadFilesSync(path.join(__dirname, './schemas'));

const mergeTypeDefsArray = mergeTypeDefs(typesArray);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefsArray,
    resolvers
});



