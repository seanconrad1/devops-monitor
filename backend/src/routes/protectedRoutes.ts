import express from "express";
import { authenticateFirebaseToken } from "../middleware/authenticate";
import { createUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.get("/protected", authenticateFirebaseToken, (req, res) => {
  console.log("get here to protected route!");

  res.json({ message: "You are authenticated!", user: (req as any).user });
});

router.get("/health", authenticateFirebaseToken, (req, res) => {
  console.log("yooo");

  res.json({ message: "Healthy authenticated route" });
});

// Protected route: Mock system metrics
router.get("/metrics", authenticateFirebaseToken, (req, res) => {
  const mockMetrics = {
    cpuUsage: (Math.random() * 100).toFixed(2) + "%",
    memoryUsage: (Math.random() * 100).toFixed(2) + "%",
    clusterStatus: "Healthy",
    podsRunning: Math.floor(Math.random() * 50) + 50,
    lastUpdated: new Date().toISOString(),
  };

  res.json(mockMetrics);
});

router.post("/users", createUser);
router.get("/users", getUsers);

export default router;
