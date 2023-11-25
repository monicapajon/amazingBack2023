const express = require('express');
const indexRouter = require('./router/indexRouter.js');
require('dotenv').config();
require('./db.js');

console.log(process.env.PASSWORD_DB_CONNECTION);

const swaggerUi = require('swagger-ui-express');
const swaggerDocumentConfig = require('../swagger-openapi.json');

const app = express();
app.use(express.json());
app.use('/api', indexRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentConfig));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
//poner localhost:3000/api-docs
