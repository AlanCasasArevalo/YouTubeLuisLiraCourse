import {IResolvers} from '@graphql-tools/utils'
const gameResolver: IResolvers = {
    Query: {
        gameHello() {
            return 'HOLAAAAAAAAAAA'
        }
    }
}

export default gameResolver