const {session, 
  passport, 
  passportLocalMongoose, express} = require("../utils/packages");
const {passportConfig} = require("./passport");


function middleware(app){
  app.use(express.urlencoded({extended: true}));
  app.use(express.static("public"));
  app.use("/certificates",express.static("certificates"));
  app.set('view engine', 'ejs');


app.use(session({
  secret: 'always be ready',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);
}

module.exports = middleware;