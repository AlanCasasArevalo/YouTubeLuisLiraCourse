import {IResolvers} from '@graphql-tools/utils'
import { mocks } from '../../mock'
const resolvers: IResolvers = {
    Query: {
        hello() {
            return 'HOLAAAAAAAAAAA'
        },
        getCharacter() {
            return mocks.characters
        }
    }
}

export default resolvers