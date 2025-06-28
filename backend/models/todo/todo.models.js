import mongoose, { mongo, Schema } from "mongoose";
import { subTodo } from "./sub_todo.models";
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,


    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId
            ref : "subTodo"
        }
    ]

}, { timestamps: true })

export const todo = mongoose.model("todo", todoSchema);
