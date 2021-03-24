// imports:
const express = require("express");
const nodemailer = require("nodemailer");

// creating express app:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// GET request to the home page:
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Creating Transporter to send e-mail:
let transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// POST request from the form:
app.post("/post", function (req, res) {
  console.log(req.body);

  const dataDeHoje = new Date().toDateString();
  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAILTO,
    subject: `E-Mail do Site - Dona Moreira - ${dataDeHoje}`,
    text: ` -- Informações: --

      Nome: ${req.body.nome}
      Telefone: ${req.body.telefone}
      E-mail: ${req.body.email}
      Endereço: ${req.body.mensagem}`,
  };

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.redirect("/");
});

// App listening to port 3000:
app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port 3000 ");
  }
});
