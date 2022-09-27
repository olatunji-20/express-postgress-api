const express = require("express");
const studentRoutes = require("./src/student/routes")


const app = express();

app.get("/", (req, res) => {
    console.log("home url accessed")
});

app.use("/api/v1/students", studentRoutes)

app.listen(3000, () => {
    console.log("app running on port 3000...")
});