import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import protectedRoutes from "./routes/protectedRoutes";
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

app.use("/api", protectedRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
