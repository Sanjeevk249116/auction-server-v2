const express=require("express");

const router=express.Router();

router.get("/app", (req, res) => {
  return res.status(200).json({ msg: "try to add test with jest." });
});

module.exports={router}