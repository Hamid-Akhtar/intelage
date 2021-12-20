import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import formRoutes from "./routes/route.js";

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/post", formRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
