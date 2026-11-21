import 'dotenv/config';
import app from './app.js';
import connectDB from './config/database.js';

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
}

const PORT = process.env.PORT || 8000;

await connectDB();

app.listen(PORT, () => {
    console.log(`Server listens on PORT: ${PORT}`);
});