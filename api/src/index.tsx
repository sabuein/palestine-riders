"use strict";

const express = require("express");
const api = express();
const port = 4435;
const host = "http://localhost";

api.get("/", (req, res) => {
    console.dir(req);
    res.send("Bismillah.");
    console.log(`New request from ${host}:${port}`);
});

const server = api.listen(port, (error) => {
    (error) ?
        console.error(error) :
        console.log(`API started on ${host}:${port}`);
});
