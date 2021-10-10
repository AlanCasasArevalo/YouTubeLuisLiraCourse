import {IResolvers} from '@graphql-tools/utils'
import { characters } from '../../data/data.json'
const charactersResolver: IResolvers = {
    Query: {
        getCharacters() {
            return characters
        }
    }
}

export default charactersResolver