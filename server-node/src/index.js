// cd vue-cli/server/serverKoa

'use strict'

const PORT = 3002

const Koa = require('koa')
const favicon = require('koa-favicon')
const bodyParser = require('koa-bodyparser')
const koaCors = require('@koa/cors')
const Router = require('koa-router')
const koaStatic = require('koa-static')


const app = new Koa()

app.use(favicon('../public/favicon.ico'))
app.use(koaCors())
app.use(koaStatic('../node_modules/bootstrap/dist/css/', { defer:true }));
app.use(bodyParser({ jsonLimit: '56kb' }))

const router = new Router()

const pug = require('pug')
const config = require('./config.js')
const {apiUrl,clientSideRenderUrl,serverSideRenderUrl} = config
const messages =[ {author: 'Ivan', text: 'The sun is shining brightly'}]
const calculations = [0,2,4,8,10]
router.get('/public/message-board', async ctx => {
  ctx.body = pug.renderFile('./templates/main.pug',{messages, apiUrl, clientSideRenderUrl, serverSideRenderUrl})
})

router.post('/api/add-new-message', ctx => {
  const {text,author} = ctx.request.body
  console.log('{text,author} ->', {text,author}); // debug
  messages.push({text,author} )

  ctx.body = 'success'
  ctx.status = 201
})

router.get('/api/history', ctx => {
  ctx.body = calculations.reduce((total,digit, index)=>{
    if(index ===0) return total
    total.push(    {id: index,
    current:calculations[index],
    previous:calculations[index-1],
    average:(calculations[index]+ calculations[index-1])/2
    })

    return total
  },[])
  ctx.status = 201

})

// подцепляем роутер
app.use(router.routes())

// слушаем сервер
app.listen(PORT,()=> {console.log(`Server starts on ${PORT} port`)})
