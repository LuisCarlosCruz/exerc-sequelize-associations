const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

const bodyParser = require('body-parser');

const { error } = require('./middlewares/erroMiddleware');
const patientsRouter = require('./routers/patientsRouter');

app.use('/patients', patientsRouter);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta http://localhost:${process.env.PORT}`);
});
