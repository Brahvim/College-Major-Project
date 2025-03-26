import express from "express";

const s_port = 8080;
const s_app = express();
const s_pathFront = ".";

s_app.use(express.static(s_pathFront));
s_app.listen(s_port, () => console.log(`App on [ http://localhost:${s_port} ].`));
