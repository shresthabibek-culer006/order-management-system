const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));  // ← add this

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

module.exports = app;