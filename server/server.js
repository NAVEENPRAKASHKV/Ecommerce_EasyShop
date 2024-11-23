const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utils/db");

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRouter);

dbConnect();
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
