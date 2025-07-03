const express = require("express");
const { router } = require("./src/router/router");

const app = express();
app.use(express.json());

app.use("/",router)

app.use(() => {
  throw new Error("request url is not found.");
});

app.listen(8080, () => {
  try {
    console.log("connection successfully");
  } catch (error) {
    console.log("error in connection", error);
  }
});

