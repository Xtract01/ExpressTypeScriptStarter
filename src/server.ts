import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
import z from "zod";
import { genericErrorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger.config";
import { attachCorrelationMiddleware } from "./middlewares/correlation.middleware";

const app = express();

app.use(express.json());

app.use(attachCorrelationMiddleware);
app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server running on Port ${serverConfig.PORT}`);
  logger.info("press Ctrl+C to stop the server", { name: "server" });
});
