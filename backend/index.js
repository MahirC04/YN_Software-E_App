import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // <-- Add this import
import routes from './routes/index.js';
import { pool } from './libs/database.js'; // Assuming this is your PostgreSQL pool setup

dotenv.config();
const app = express();

// ✅ Middleware to handle CORS
app.use(cors()); // <-- Add this middleware

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ Route handling (auth, user, account, transaction)
app.use('/api-v1', routes);

// ✅ Sample Database Test Route (Optional)
app.get('/api-v1/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Database test failed' });
    }
});



// ✅ Server Listen
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

