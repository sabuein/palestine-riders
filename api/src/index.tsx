"use strict";

const express = require("express");
const app = express();
const port = 4435;

app.get("/", (req, res) => {
    res.send("Bismillah.");
    console.log(`New request on http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`API started on http://localhost:${port}`);
});
