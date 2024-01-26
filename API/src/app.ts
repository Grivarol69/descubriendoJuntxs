import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import compression from 'compression'
const server =  express()



// middlewares prade
server.use(cors()) // middleware que permite que el servidor reciba peticiones de otros servidores
server.use(helmet()) // middleware que añade seguridad a las peticiones
server.use(compression()) // middleware que comprime las peticiones
server.use(bodyParser.urlencoded({extended: false})) // middleware que transforma los req.body a un objeto de javascript
server.use(express.json()) // middleware que transforma  los req.body a  un json
server.use(morgan('combined')) // middleware que muestra por consola las peticiones que se hacen al servidor (GET, POST, PUT, DELETE





export default server;