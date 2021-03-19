// imports:
const express = require("express");

// creating express app:
const app = express();

// GET request to the home page:
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// App listening to port 3000:
app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port 3000 ");
  }
});
