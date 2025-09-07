const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 3000;

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true })); // handle form
app.use(express.static(path.join(__dirname, "public"))); // untuk file css, js, gambar

// route utama
app.use('/admin', adminRoutes);


// listen
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));