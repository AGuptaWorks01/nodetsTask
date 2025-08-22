import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    PORT: process.env.PORT || '4000',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task_manager',
    JWT_SECRET: process.env.JWT_SECRET || 'nodejstask@#$%^',
    NODE_ENV: process.env.NODE_ENV || 'development',
};