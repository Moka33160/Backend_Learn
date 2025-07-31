import { Router } from "express";

const auth = Router();

auth.post("/signe-up", (req, res) => res.send({ title: "signe up" }));
auth.post("/signe-in", (req, res) => res.send({ title: "signe in" }));
auth.post("/signe-out", (req, res) => res.send({ title: "signe out" }));

export default auth;
