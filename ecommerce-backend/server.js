import express from "express";

const app = express();

console.log("🚀 FILE LOADED CORRECTLY");

app.get("/", (req, res) => {
  res.send("Backend working");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("🔥 SERVER STARTED ON PORT:", PORT);
});