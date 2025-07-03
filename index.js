const express = require("express");
const { router } = require("./src/router/router");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const app = express();
app.use(express.json());

app.use("/", router);

app.use(() => {
  throw new Error("request url is not found.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(
      `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
  } catch (error) {
    console.log("error in connection", error);
  }
});
