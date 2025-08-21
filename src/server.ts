// src/server.ts
import app, { connectDB } from "./app";
import { ENV } from "./config/env";

async function bootstrap() {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server running at http://localhost:${ENV.PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}

bootstrap();
