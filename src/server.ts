import express from 'express'
import dotEnv from 'dotEnv'
import mustache from 'mustache-express'
import path from 'path'
import routerMain from './routers/index'

dotEnv.config()



const server = express()

server.use(express.static(path.join(__dirname,'../public')))

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

// rotas 

server.use(routerMain)
server.use((req,res)=>{
  res.render('pages/404')
})





server.listen(process.env.PORT)
