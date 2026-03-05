import express from "express";
import { z } from "zod";
import { randomUUID } from "crypto";
import { chatbotEngine } from "../server/chatbot-engine";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Inline the schema to avoid @shared path alias issues on Vercel
const sendMessageSchema = z.object({
    message: z.string().min(1),
    conversationId: z.string().optional(),
});

// POST /api/chat/message
app.post("/api/chat/message", async (req, res) => {
    try {
        const { message, conversationId } = sendMessageSchema.parse(req.body);
        const convId = conversationId || randomUUID();

        const userMessage = {
            id: randomUUID(),
            role: "user" as const,
            content: message,
            timestamp: Date.now(),
        };

        chatbotEngine.addToHistory(convId, userMessage);

        const typingDelay = 300 + Math.random() * 500;
        await new Promise((resolve) => setTimeout(resolve, typingDelay));

        const botResponse = chatbotEngine.generateResponse(message, convId);

        res.json({ conversationId: convId, userMessage, botMessage: botResponse });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/chat/history/:conversationId
app.get("/api/chat/history/:conversationId", (req, res) => {
    try {
        const history = chatbotEngine.getHistory(req.params.conversationId);
        res.json({ messages: history });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/chat/history/:conversationId
app.delete("/api/chat/history/:conversationId", (req, res) => {
    try {
        chatbotEngine.clearHistory(req.params.conversationId);
        res.json({ success: true });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default app;

