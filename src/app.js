const express = require('express');
//const indexRouter = require('./router/indexRouter.js');
const createError = require('http-errors');
const cors = require('cors');
require('dotenv').config();
require('./db.js');

console.log(process.env.PASSWORD_DB_CONNECTION);

const swaggerUi = require('swagger-ui-express');
const swaggerDocumentConfig = require('../swagger-openapi.json');
const indexRouter = require('./router/indexRouter.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', indexRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentConfig));

const notFound = (req, res, next) => {
  next(createError(404, 'This endpoint was not found'));
};

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
//poner localhost:3000/api-docs
