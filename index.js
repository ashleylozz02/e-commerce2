const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();


const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "passowrd",
  database: "E-commerce",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else if (!err) {
    console.log("It went though!");
  }
});

app.use(cors());
app.use(express.json());

app.get("/AllProducts", (req, res) => {
  db.query(`SELECT * FROM products`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3600, () => {
  console.log(`console server listening on port 4000`);
});
