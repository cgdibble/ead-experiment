const fns = require('./src/index')
const http = require('http')
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

app.use(async ctx => {
  const param = ctx.originalUrl.split('/')[1]
  const result = await fns[param]()
  ctx.status = 200
  ctx.body = result
})

app.listen(3000)
