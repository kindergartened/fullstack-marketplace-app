import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {Routes} from "./routes/router.js";
import auth from "./middlewares/auth.js";

import cors from "cors"
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors({
    origin: '*',
    credentials: true,
    
}))
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//     '/api',
//     createProxyMiddleware({
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//     })
// );
app.use(Routes);
app.use(cookieParser());
export default app;

