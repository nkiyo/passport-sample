const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const port = 3000
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  secret: 'passport test',
  resave:false,
  saveUninitialized:false,
  //cookie: {
  //  secure: true, // https://stackoverflow.com/a/23119369
  //},
}))

// app.use 順序重要 https://github.com/passport/express-4.x-local-example/blob/master/server.js#L60
app.use(passport.initialize())
app.use(passport.session()) // https://qiita.com/tinymouse/items/fa910bf80a038c7f9ccb

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
  console.log(`### user:`)
  console.log(`${JSON.stringify(req.user)}`)
  console.log('### sessions')
  console.log(req.sessionStore.sessions)
  console.log('### cookies')
  console.log(req.cookies)
  if(req.user) {
    console.log(`"${req.user.username}" is authed user`)
  } else {
    console.log(`NOT authed user`)
  }
  if(req.isAuthenticated()) {
    console.log(`isAuthenticated`)
  } else {
    console.log(`NOT isAuthenticated`)
  }
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
  console.log(`### deserializeUser`)
  done(null, user);
});

