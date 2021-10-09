import {IResolvers} from '@graphql-tools/utils'
import { mocks } from '../../mock'
const charactersResolver: IResolvers = {
    Query: {
        getCharacters() {
            return mocks.characters
        }
    }
}

export default charactersResolver