import mongoose, { Schema, Document, Model } from 'mongoose';


export type TaskStatus = 'pending' | 'completed';


export interface ITask extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
}


const taskSchema = new Schema<ITask>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending', index: true },
}, { timestamps: true });


export const Task: Model<ITask> = mongoose.models.Task || mongoose.model<ITask>('Task', taskSchema);