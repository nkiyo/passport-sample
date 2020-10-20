const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(session({ resave:false,saveUninitialized:false, secret: 'passport test' }))

const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({ session: true },
  function(username, password, done) {
  console.log(`auth with LocalStrategy username=${username} password=${password}`);

  // ユーザ名とパスワードを検証
  //if (なんらかのエラー) {
  //  return done(エラー内容);
  //}
  //else if (失敗) {
  //  return done(null, false);
  //}
  //else if (成功) {
  //  return done(null, username);
  //}
  return done(null, {username});
}))


app.get('/', (req, res) => {
  console.log(`get`)
  res.json({msg: 'get ok'})
})

app.post('/login',
  passport.authenticate('local', {
    session:true }),
  (req, res) => {
  console.log(`login succeed as ${JSON.stringify(req.user)}`)
  res.send('login succeed ${JSON.stringify(req.body)}')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

// https://stackoverflow.com/a/19949584
passport.serializeUser(function(user, done) {
  console.log(`serializeUser`)
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  console.log(`deserializeUser`)
  done(null, user);
});

