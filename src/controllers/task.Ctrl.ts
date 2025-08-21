import { Request, Response } from 'express';
import { Task } from '../models/Task';
import { createTaskSchema, updateTaskSchema } from '../validators/taskSchema';


export async function createTask(req: Request, res: Response) {
    const parse = createTaskSchema.safeParse(req.body);
    if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });


    const { title, description, status } = parse.data;
    const userId = req.user!.id;
    const task = await Task.create({ user: userId, title, description, status });
    res.status(201).json(task);
}


export async function getTasks(req: Request, res: Response) {
    const userId = req.user!.id;
    const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });
    res.json(tasks);
}


export async function getTaskById(req: Request, res: Response) {
    const userId = req.user!.id;
    const task = await Task.findOne({ _id: req.params.id, user: userId });
    if (!task) return res.status(404).json({ error: 'task not found' });
    res.json(task);
}


export async function updateTask(req: Request, res: Response) {
    const parse = updateTaskSchema.safeParse(req.body);
    if (!parse.success) return res.status(400).json({ error: parse.error.flatten() });


    const userId = req.user!.id;
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: userId },
        { $set: parse.data },
        { new: true }
    );
    if (!task) return res.status(404).json({ error: 'task not found' });
    res.json(task);
}


export async function deleteTask(req: Request, res: Response) {
    const userId = req.user!.id;
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: userId });
    if (!task) return res.status(404).json({ error: 'task not found' });
    res.status(204).send();
}