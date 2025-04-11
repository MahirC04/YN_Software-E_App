import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const { Pool } = pg;

// Create a new Pool using the connection string from the .env file
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this matches your .env variable name
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false, // Disable SSL for local development
});
