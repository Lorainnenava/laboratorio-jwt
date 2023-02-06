const express = require('express');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config(users);

const users = [
  { email: "admin@example.com", name: "admin", rol: "admin" },
  { email: "user@example.com", name: "user", rol: "user" },
];

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

app.post('/auth', (req, res) => {
  const email= req.body.email;
  res.json({email: email})
  res.end()
})

module.exports = app;
