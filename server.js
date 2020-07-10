const express = require('express');
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api/user", require("../restAPI-Node/routes/user.routes"));

app.listen(app.get("port"), () =>{
    console.log("server on port: ", app.get("port"));
});