// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Book = require("./models/book.model");
const connectDB = require("./config/db");
const booksData = require("./bookData"); //  Use your real data

async function seedData() {
  try {
    await connectDB();

    console.log("Deleting old books...");
    await Book.deleteMany();

    console.log("Inserting new books...");
    await Book.insertMany(booksData);

    console.log("Seeding completed successfully!");
    process.exit();
  } catch (err) {
    console.error("Error while seeding data:", err);
    process.exit(1);
  }
}

seedData();
