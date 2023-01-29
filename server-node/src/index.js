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

const messages =[ {author: 'Ivan', text: 'The sun is shining brightly'}]
router.get('/public/message-board', async ctx => {
  ctx.body = pug.renderFile('./templates/main.pug',{messages, apiUrl:'http://localhost:3002', clientSideRenderUrl:'http://localhost:8080/#/private',serverSideRenderUrl:'http://localhost:3002/public',})
})

router.post('/add-new-message', async ctx => {
  const {text,author} = ctx.request.body
  console.log('{text,author} ->', {text,author}); // debug
  messages.push({text,author} )

  ctx.body = 201
})

router.put('/user/:userId', async ctx => {
  // то, что написано через двоеточие, можем вытащить через ctx.papams.
  console.log('ctx.request.body ->', await ctx.request.body) // debug
  console.log('userId ->', ctx.params.userId) // debug
  // console.log('ctx.body ->', ctx.body) // debug
  ctx.response.body = 'ok3'
})

// подцепляем роутер
app.use(router.routes())

// слушаем сервер
app.listen(PORT,()=> {console.log(`Server starts on ${PORT} port`)})
