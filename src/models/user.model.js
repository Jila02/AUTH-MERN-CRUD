import mongoose from "mongoose";

const userSchemma= new mongoose.Schema({
    username:{
        type: String,
        require: true,
        trime:true
    },
    email:{
        type: String,
        require:true,
        trime:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

export default mongoose.model('User',userSchemma)