import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectionDB = async()=>{
    try {
     const connectionInstance=  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ;
     console.log(`Mongodb connected !!DB Host:
        ${connectionInstance.connection.host}`
     );
      } catch (error) {
        console.log("Error:",error);
        process.exit(1);
    }
}
export default connectionDB;