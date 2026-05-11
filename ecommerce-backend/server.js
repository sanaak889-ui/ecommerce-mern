import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend working");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});