import express from  "express";
import sqlite3 from "sqlite3";
import { logger } from "./utils.js";
import collections_router from "./collections.js";

export const db = new sqlite3.Database("./sqlite/skizodraws.db", sqlite3.OPEN_READWRITE);
const app = express();
const port = 3000;

app.use(logger);
app.use("/collections", collections_router);
app.use("/", (req, res) => res.send("Nothing to see here!"));


app.listen(port, () => {
        console.log(`Listening at port ${port}`);
});
