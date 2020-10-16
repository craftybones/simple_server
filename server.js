const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('*', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Listening on ${port}...`));
