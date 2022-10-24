const path = require("path");
const cors = require("cors");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 9000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", require("./routes/todoRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
