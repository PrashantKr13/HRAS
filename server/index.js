const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const roomRoutes = require("./routes/roomRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", roomRoutes);
const PORT = 5000;

const server = app.listen(PORT, ()=>{
    console.log(`App has started on Port ${PORT}`);
})
