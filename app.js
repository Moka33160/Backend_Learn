import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("bienvenu su mon serveur");
});

app.listen(5500, () => {
  console.log("mon serveur tourne sur le por :  http://localhost:5500");
});
export default app;
