import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => res.send({ title: "fetch all user" }));
userRoute.put("/:id", (req, res) => res.send({ title: "update an user" }));
userRoute.post("/", (req, res) => res.send({ title: "add an user" }));
userRoute.delete("/:id", (req, res) => res.send({ title: "del an user" }));
userRoute.get("/:id", (req, res) => res.send({ title: "see an  user detail" }));

export default userRoute;
