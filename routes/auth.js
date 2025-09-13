const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET login page
router.get("/login", (req, res) => {
  res.render("login", { title: "Norin Cafe", error: null });
});

// POST login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.render("login", { title: "Norin Cafe", error: "User tidak ditemukan!" });
    }
    
    if (user.password === password) {
      return res.redirect("/admin");
    } else {
      return res.render("login", { title: "Norin Cafe", error: "Password salah!" });
    }
  } catch (err) {
    console.error(err);
    res.render("login", { title: "Norin Cafe", error: "Terjadi error server!" });
  }
});

module.exports = router;
