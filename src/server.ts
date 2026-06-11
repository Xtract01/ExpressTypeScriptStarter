import express from "express";
const app = express();
const PORT = 3000; // implicitly assumed type as number

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
