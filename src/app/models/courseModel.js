import mongoose from "mongoose";

const Schema = mongoose.Schema;

const course = new Schema({
    title: String,
    description: String,
    slug: String
});

const MyModel = mongoose.model('course', course);
export default MyModel;