app.get("/login", (req, res) => {
  res.render("login", { title: "Norin Cafe" });
});

app.post("/login", (req, res) => {
  // sementara, cek dummy username & password
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    return res.redirect("/"); // masuk ke dashboard
  }
  res.render("login", { error: "Username atau password salah!" });
});