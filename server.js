import express from "express";

const s_port = 8080;
const s_app = express();
const s_pathStatic = "./ResumeBuilder";

s_app.use(express.static(s_pathStatic));
s_app.listen(s_port, () => console.log(`Server now live on: [ http://localhost:${s_port}/ ].`));
