const express = require("express");
const path = require("path");
const ejs = require("ejs");
const authRoutes = require("./routes/auth"); 
const sequelize = require("./config/db");  // koneksi db
require("dotenv").config(); // load .env

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.use("/", authRoutes);  // <-- aktifkan login
// app.use("/admin", adminRoutes); // ini aktif nanti setelah ada adminRoutes

sequelize.sync()
  .then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error("DB Sync error:", err));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
