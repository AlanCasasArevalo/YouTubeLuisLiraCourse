import {IResolvers} from '@graphql-tools/utils'
const game: IResolvers = {
    Query: {
        gameHello() {
            return 'HOLAAAAAAAAAAA'
        }
    }
}

export default game