const superTest = require("supertest");
const { router } = require("../src/router/router");
const express = require("express");

describe("GET /app", () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/", router);
  });

  it("return 200 status", async () => {
    const response = await superTest(app).get("/app");
    expect(response.statusCode).toBe(200);
  });
});
