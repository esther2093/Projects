require("dotenv").config();

const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");

let fruitRoutes = require("./routes/fruitRoutes");
let nutritionRoutes = require("./routes/nutritionRoutes");
let loadDatabaseRoutes = require("./routes/loadDatabaseRoutes");
const { loadDatabase } = require("./controllers/loadDatabaseController");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SQL application." });
});

app.use("/api/fruits", fruitRoutes);
app.use("/api/nutritions", nutritionRoutes);
app.use("/api/load", loadDatabaseRoutes);

const PORT = process.env.PORT || 8082

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await loadDatabase();
  console.log(" ~~ Welcome to Esther's Mini Project 3 :D ~~");
});