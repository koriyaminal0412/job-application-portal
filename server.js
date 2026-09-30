const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const protect = require("./src/middleware/authMiddleware");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const applicationRoutes = require("./src/routes/applicationRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route",
    userId: req.userId
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Job Application Portal API is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});