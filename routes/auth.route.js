import { Router } from "express";
import {signUp , signIn , signOut} from '../controllers/auth.controllers'
const auth = Router();

auth.post("/signe-up", signUp);
auth.post("/signe-in",signIn);
auth.post("/signe-out",signOut);

export default auth;
