import {IResolvers} from '@graphql-tools/utils'
import {characters, games} from '../../data/data.json'
import { Db } from 'mongodb'

const charactersResolver: IResolvers = {
    Query: {
        async getCharacters(root: void, args: void, context: Db) {

            const charactersFromData = await context.collection('characters')
                                            .find()
                                            .toArray()
            return charactersFromData
        },
        getCharacter(root: void, args: any) {
            const [character] = characters.filter(character => character._id === args._id)
            return character
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
    },
    Mutation: {
        async addCharacter(_, {character}, {db}, info) {
            console.log(`${character}`)
            return 'Personaje agregado correctamente'
        }
    }
}

export default charactersResolver