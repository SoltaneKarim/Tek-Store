const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
// uncomment to use MYSQL
const db = require("./Mysql/index.js");

//uncomment to use mongodb
// const db = require('./mongoDb')


app.use(express.json());
app.use(cors());

// app.get("/api/products", (req, res) => {
//   res.send("omour GET jawna behi");
// });

app.get("/api/products", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/products", (req, res) => {
  const { name, price, description, imageUrl } = req.body
  const sql = "INSERT INTO product (name, price, description, imageUrl) VALUES (?,?,?,?)";
  db.query(sql, [ name, price, description, imageUrl ], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

app.put("/api/products/:id", (req, res) => {
  const { name, price, description, imageUrl } = req.body
  const productId = req.params.id
  const sql = "UPDATE product SET name=?, price=?, description=?, imageUrl=? WHERE id=?";
  db.query(sql, [ name, price, description, imageUrl, productId ], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id
  const sql = "DELETE FROM product WHERE id=?";
  db.query(sql, [ productId ], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`listening on ${port}`);
});
