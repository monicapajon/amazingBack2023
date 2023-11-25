const mongoose = require('mongoose');
const passwordDb = process.env.PASSWORD_DB_CONNECTION;
const userDb = process.env.USER_DB_CONNECTION;
mongoose
  .connect(
    `mongodb+srv://${userDb}:${passwordDb}@cluster0.40mnxiw.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((error) => console.log('Error connecting to database: ' + error));
