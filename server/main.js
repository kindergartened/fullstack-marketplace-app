import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {Routes} from "./routes/router.js";

import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const port = process.env.PORT || 5000;
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

export default app;