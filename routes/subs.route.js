import { Router } from "express";

const subRoute = Router();

subRoute.get('/', (req, res) => res.send({ title: 'get all subs°' }));
subRoute.get('/:id', (req, res) => res.send({ title: 'get all subs° details' }));
subRoute.post('/', (req, res) => res.send({ title: 'create a subscription' }));
subRoute.put('/', (req, res) => res.send({ title: 'update a subscription' }));
subRoute.delete('/', (req, res) => res.send({ title: 'delete a subscription' }));
subRoute.get('/user/:id', (req, res) => res.send({ title: 'get all  user subs°' }));
subRoute.get('/:id/cancel', (req, res) => res.send({ title: 'cancel  user subs°' }));
subRoute.get('/upcoming', (req, res) => res.send({ title: 'upcoming new subs°' }));
export default subRoute;
