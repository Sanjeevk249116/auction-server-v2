const superTest = require("supertest");
const { app } = require("../index");

describe("GET /app", () => {
  it("return 200 status", async () => {
    const response = await superTest(app).get("/app");
    expect(response.statusCode).toBe(200);
    
  });
});
