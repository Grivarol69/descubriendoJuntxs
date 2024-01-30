import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import compression from 'compression'


import routes from './routes'

const server =  express() 


server.set('port', process.env.PORT || 3000) // configuracion del puerto

// middlewares prade
server.use(cors()) // middleware que permite que el servidor reciba peticiones de otros servidores
server.use(helmet()) // middleware que aÃ±ade seguridad a las peticiones

server.use(compression()) // middleware que comprime las peticiones
server.use(bodyParser.urlencoded({extended: false})) // middleware que transforma los req.body a un objeto de javascript
server.use(express.json()) // middleware que transforma  los req.body a  un json
server.use(morgan('combined')) // middleware que muestra por consola las peticiones que se hacen al servidor (GET, POST, PUT, DELETE

// routes

server.use("/" , routes)

export default server;

