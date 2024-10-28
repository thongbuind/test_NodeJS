import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const algorithm = new Schema({
    name: String,
    options: Array,
    theory: Array,
    examples: Array,
    slug: String
});

const algorithmModel = mongoose.model('algorithm', algorithm);
export default algorithmModel;