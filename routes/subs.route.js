import { Router } from "express";

const subRoute = Router();

subRoute.get('/', (req, res) => res.send({ title: 'get all subs°' }));

export default subRoute;
