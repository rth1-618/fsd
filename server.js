// const express = require("express");
import express from "express";
// const mongoose = require("mongoose");
import connectDB from "./db.js";
import userRoutes from "./routes/userRoutes.js";
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/users", userRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
