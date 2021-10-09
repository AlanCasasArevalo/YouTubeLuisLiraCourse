import {IResolvers} from '@graphql-tools/utils'
import { mocks } from '../../mock'
const characters: IResolvers = {
    Query: {
        getCharacter() {
            return mocks.characters
        }
    }
}

export default characters