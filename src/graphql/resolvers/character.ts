import {IResolvers} from '@graphql-tools/utils'
import { characters, games } from '../../data/data.json'
const charactersResolver: IResolvers = {
    Query: {
        getCharacters() {
            return characters
        }
    },
    Character: {
        games(root: any, args: any, context: any, options: any) {
            const gameList: Array<any> = []
            root.games.map((gameId: string) => {
                gameList.push(...games.filter(game => game._id === gameId))
            })

            return gameList
        }
    }
}

export default charactersResolver