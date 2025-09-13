const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/login", (req, res) => {
  res.render("login", { title: "Norin Cafe", error: null });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err) return res.send("Error query database");

    if (results.length === 0) {
      return res.render("login", { title: "Norin Cafe", error: "User tidak ditemukan!" });
    }

    const user = results[0];

    if (user.password === password) {
      return res.redirect("/admin");
    } else {
      return res.render("login", { title: "Norin Cafe", error: "Password salah!" });
    }
  });
});

module.exports = router;
