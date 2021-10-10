import {MongoClient, Db} from 'mongodb'
import config from '../config'
import exp from "constants";

class MongoDB {
    private client: MongoClient
    private dbName: any = config.dbName
    private mongoUri: any = config.mongoUri
    private static connection: Db

    constructor() {
        this.client = new MongoClient(this.mongoUri)
    }

    async connect() {
        if (!MongoDB.connection) {
            try {
                await this.client.connect()
                MongoDB.connection = this.client.db(this.dbName)
                console.log(`CONEXION A BASE DE DATOS CORRECTA`)
            } catch (error) {
                console.log(`CONEXION A BASE DE DATOS ERRONEA ${error}`)
            }
        } else {
            return MongoDB.connection
        }
    }
}

export default MongoDB





