const bcrypt = require("bcryptjs");

app.post("/encrypt", (req, res) => {
  const password = req.body.secret;

  let salt = bcrypt.genSalt(10);
  let hashedPassword = bcrypt.hash(password, salt);
  res.JSON(hashedPassword);
});
