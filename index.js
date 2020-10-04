const { Server } = require('http');
const parser = require('body-parser');
const express = require('express');
const session = require('express-session');
const app = express();;
const router = require('./router/router');
const PORT = 4329;

app
  .disable('x-powered-by')
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use('/users', router)
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
