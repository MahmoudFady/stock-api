import express from "express";
import morgan from "morgan";
import { employeeRoutes } from "./routes/employee.routes";

import { errMw } from "./middlewares/err.mw";
import { lookupRoutes } from "./routes/lookup.routes";
import { supplierRoutes } from "./routes/supplier.routes";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/lookups", lookupRoutes);
app.use("/api/v1/suppliers", supplierRoutes);

app.use(errMw);
export default app;
