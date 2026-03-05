import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register all API routes
// We don't await because the route attachments are synchronous
registerRoutes(app);

// Export the Express app for Vercel Serverless Function
export default app;
