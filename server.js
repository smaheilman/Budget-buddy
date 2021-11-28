//npm i express
const express = require('express');
const routes = require('./controllers');
//npm i sequelize
const sequelize = require('./config/connection');
// npm install --save path
const path = require('path');
// // npm i express-session connect-session-sequelize
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// //MIGHT USE THESE LATER
// // npm i handlebars, npm i express-handlebars
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ });

// const sess = {
//   secret: 'Super duper duper secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

const app = express();
const PORT = process.env.PORT || 3001;

// // app.use(session(sess));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// turn on connection to db and server
// force true will always sync to server (reset) upon npm start
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});