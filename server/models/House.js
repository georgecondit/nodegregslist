import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bedrooms: {type: String, required: true},
        bathrooms: {type: String, required: true},
        levels: {type: String, required: true},
        year: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: String, required: true},
        imgUrl: {type: String, required: true, default: "http://placehold.it/200x200" }
    },
    { timestamps: true, toJSON: {virtuals: true} }
)

export default House;