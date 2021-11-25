const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');


const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});