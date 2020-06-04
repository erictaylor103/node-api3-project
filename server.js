const express = require('express');

const usersRouter = require('./users/userRouter.js');

const server = express();

//middleware
server.use(express.json());

//for URL's that start with /api/users
server.use("/api/users", logger, usersRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const dateStamp = new Date().toISOString();
  console.log(`[${dateStamp}] ${req.method} url: ${req.originalUrl}`);
  next();
}

module.exports = server;
