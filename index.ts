import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Server 3000" });
});
app.listen(3000, () => console.log(`Server at 3000`));
