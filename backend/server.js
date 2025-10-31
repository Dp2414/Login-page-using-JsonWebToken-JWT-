const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

mongoose.connect("mongodb+srv://dpdp8311:dpdp8311@cluster0.5ysqydm.mongodb.net/Practice")
  .then(() => console.log("Connected to database"))
  .catch((e) => console.log(e));

app.use("/api", authRoutes);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});