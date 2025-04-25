import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { createUser, getUsers } from "./controllers/userController";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "5001", 10);
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.post("/api/users", createUser);
app.get("/api/users", getUsers);

app.get("/api/health", (_req, res) => {
  console.log("hello");

  res.json({ status: "ok", message: "Backend is alive!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
