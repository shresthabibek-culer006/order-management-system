const connectDB = require("./src/config/database");
const app = require("./src/app");

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});