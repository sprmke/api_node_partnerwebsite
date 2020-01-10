const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/jobs/job_post');

const jobsRoutes = require('./routes/jobs');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api/jobs', jobsRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(8081);
  })
  .catch((error) => {
    console.log('error::', error);
  });