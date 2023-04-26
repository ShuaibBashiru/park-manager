const express = require('express');
const app = express();
app.set('etag', false);

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const routes = require('../routes/routes');
const record = require('../api/getRecord');
app.use('/', routes);
app.use('/api', record);

// start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});