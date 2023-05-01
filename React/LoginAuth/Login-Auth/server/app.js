const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(express.json());

const users = [{ username: "George", password: "lovemycat" }];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const theUser = users.find(
    (user) => user.username == username && user.password == password
  );

  if (theUser) {
    const token = jwt.sign(
      {
        username: theUser.username,
      },
      "SECRETKEY"
    );
    res.json({ success: true, token: token });
  } else {
    res.json({
      success: false,
      errorMessage: "Unable to Authenticate; Please Try Again.",
    });
  }
});

app.listen(8080, () => {
  console.log("Server is running...");
});
