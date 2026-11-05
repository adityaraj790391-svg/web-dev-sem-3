const mongoose = require("mongoose");


const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    file:{
        type:String,
        required:true
    },
    referencelink:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    category:{
        type:String,
        required:true,
        enum:["BCA","BTECH","BSC"]
    }

    
})

const notesSchemaModel = mongoose.model("notes",notesSchema)
module.exports = notesSchemaModel