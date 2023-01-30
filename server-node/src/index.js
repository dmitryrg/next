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
app.use(koaStatic('../node_modules/bootstrap/dist/css/', { defer: true }))
app.use(bodyParser({ jsonLimit: '56kb' }))

const router = new Router()

const pug = require('pug')
const config = require('./config.js')
const { apiUrl, clientSideRenderUrl, serverSideRenderUrl } = config

// хранилища данных
const messages = [{ author: 'Ivan', text: 'The sun is shining brightly' }]
const calculations = [0]

router.get('/public/message-board', async ctx => {
  ctx.body = pug.renderFile('./templates/main.pug', {
    messages,
    apiUrl,
    clientSideRenderUrl,
    serverSideRenderUrl
  })
})

router.post('/api/add-new-message', ctx => {
  if (typeof ctx.request.body !== 'object' || Array.isArray(typeof ctx.request.body)) {
    ctx.body = { error: `Input data from request body is not correct` }
    ctx.status = 400
    return
  }
  const { text, author } = ctx.request.body
  if (!text || typeof text !== 'string') {
    ctx.body = { error: `Input param "text" is not correct` }
    ctx.status = 400
    return
  }
  if (!author || typeof author !== 'string') {
    ctx.body = { error: `Input param "author" is not correct` }
    ctx.status = 400
    return
  }

  messages.push({ text, author })

  ctx.body = 'success'
  ctx.status = 201
})

router.post('/api/calculation-maker', ctx => {
  if (isNaN(ctx.request.body.digit)) {
    ctx.body = { error: `Input param "digit" is not a number` }
    ctx.status = 400
    return
  }
  const res = (+ctx.request.body.digit + calculations.slice(-1)[0]) / 2
  calculations.push(+ctx.request.body.digit)
  ctx.body = res

  ctx.status = 201
})

router.get('/api/calculation-history', ctx => {
  ctx.body = calculations.reduce((total, digit, index) => {
    if (index === 0) return total
    total.push({
      id: index,
      current: calculations[index],
      previous: calculations[index - 1],
      average: (calculations[index] + calculations[index - 1]) / 2
    })

    return total
  }, [])
  ctx.status = 200
})

// подцепляем роутер
app.use(router.routes())

// слушаем сервер
app.listen(PORT, () => {
  console.log(`Server starts on ${PORT} port`)
})
