const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const tripsRouter = require("./routes/trips");

// setting up mustache as a templating engine
app.engine("mustache", mustacheExpress());
// the pages are located in the views directory
app.set("views", "./views");
// extension for all the pages
app.set("view engine", "mustache");

// This helps Express to parse form submitted values
// MIDDLEWARE
app.use(express.urlencoded());
// MIDDLEWARE
app.use("/trips", tripsRouter);

/*
function logMiddleware(req, res, next) {
    console.log('[LOG MIDDLEWARE]')
     // continue with the original request 
    next()
} */

// This will allow the logMiddleware function to execute on each request
//app.use(logMiddleware)

function reqHeader(req, res, next) {
  req.headers.username = "John Doe";
  console.log(req.headers);
  next();
}

app.use(reqHeader);

app.get("/", (req, res) => {
  // create an object called user which consists of a name property
  const user = {
    name: "Curran",
  };

  res.render("index", user);
});

app.listen(8080, () => {
  console.log("Server is Running");
});
