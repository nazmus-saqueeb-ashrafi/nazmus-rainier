
import mongoose from "mongoose";

const { Schema } = mongoose;



const userSchema = new Schema(
  {
 
    
    
  }
   
  
);

// we register the model with mongoose
var UserModel = mongoose.model("User", postSchema);

export default UserModel;