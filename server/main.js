import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {AppRouter} from "./routes/router.js";

import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 5000;

// Cors
app.use(cors({
    origin: '*',
    credentials: true,
}))

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(AppRouter);
app.use(cookieParser());
