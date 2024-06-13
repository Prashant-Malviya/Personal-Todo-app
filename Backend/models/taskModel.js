import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    type: { type: String, required: true }, // New field
    dueDate: { type: Date, required: true }, // New field
}, { timestamps: true });

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;
