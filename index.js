const express = require("express");

const app = express();
app.use(express.json());

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
