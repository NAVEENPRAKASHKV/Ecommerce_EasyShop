const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utils/db");
const categoryRouter = require("./routes/dashboard/categoryRoutes");
const productRouter = require("./routes/dashboard/productRoutes");
const homeRouter = require("./routes/Home/homeRoutes");
const customerAuthRouter = require("./routes/Home/customerAuthRoutes");
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/home", homeRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", customerAuthRouter);

dbConnect();
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
