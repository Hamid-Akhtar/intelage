import express from "express";
import FormModel from "../models/formModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from Webpack Api");
});

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address1,
    city,
    state,
    zip,
    phone,
    jobTitle,
    experience,
    skills,
    reason,
  } = req.body;

  const formData = await FormModel.create({
    firstName,
    lastName,
    email,
    address1,
    city,
    state,
    zip,
    phone,
    jobTitle,
    experience,
    skills,
    reason,
  });
  if (formData) {
    res.json(formData);
  } else {
    res.status(401);
    throw new Error("Invalid user data");
  }
});

export default router;
