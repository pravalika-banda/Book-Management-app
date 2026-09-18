const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

// const PORT = process.env.PORT ?? 5000;

connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
