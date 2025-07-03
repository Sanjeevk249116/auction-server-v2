const express = require("express");

const app = express();
app.use(express.json());

app.get("/app", (req, res) => {
  return res.status(200).json({ msg: "try to add test with jest." });
});

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

module.exports = { app };
