import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
    {
        company: {type: String, required: true},
        description: {type: String, required: true},
        jobTitle: {type: String, required: true},
        hours: {type: String, required: true},
        rate: {type: String, required: true},
       
    },
    { timestamps: true, toJSON: {virtuals: true} }
)

export default Job;