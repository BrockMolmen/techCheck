require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session')
const flash = require('connect-flash');
const db = require('./models')
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/allusers', (req, res) => {
  db.user.findAll().then(foundUsers => {
    res.render('users', { users: foundUsers })
  })
})



app.use('/auth', require('./routes/auth'));



var server = app.listen(process.env.PORT || 3000, ()=> console.log(` Holla' ${process.env.PORT || 3000}`));

module.exports = server;
