import * as express from 'express'
import { createConnection } from 'typeorm'
import { User } from './api/entities/user'
import config from './config'
import routes from './api/routes'

createConnection({
    type: config.database.dialect,
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}).then(async() => {
    const app = express()

    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
        next()
    })

    app.use(routes);

    app.get('/', (req, res) => {
        res.send('index.html')
    })

    app.listen(config.port, () => {
        console.log('http://localhost:' + config.port)
    })
}).catch(error => console.log(error));

