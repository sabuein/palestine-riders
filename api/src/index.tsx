"use strict";

const express = require("express");
const api = express();
const port = 4435;
const host = "http://localhost";

api.get("/", (req, res) => {
    console.log(`Incoming from ${req.url}:${req.port} =>`);
    res.send("<h1>Bismillah</h1>");
});

api.get("/old", (req, res) => {
    console.log(`Incoming from ${req.url}:${req.port} =>`);
    res.redirect(301, "/new");
});

api.get("/new", (req, res) => {
    console.log(`Incoming from ${req.url}:${req.port} =>`);
    res.send("<h1>New</h1>");
});

api.listen(port, (error) => {
    (error) ?
        console.error(error) :
        console.log(`API started on ${host}:${port}`);
});
