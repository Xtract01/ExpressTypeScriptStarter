import express from "express";
import { serverConfig } from "./config";
import pingRouter from "./routers/ping.router";

const app = express();

app.use(,pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server running on Port ${serverConfig.PORT}`);
});
