import mongoose from "mongoose";

import { DB_URI , NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error(" il n' y a pas de base de donnée qui existe.")
}

const connect = async () =>{
    try{
        await mongoose.connect(DB_URI);
        console.log("connection a la base de donnée ....");
    }
    catch(error){
        console.error("erreur de connection avec la DB : " , error);
        process.exit(1);
    }
}

export default connect;