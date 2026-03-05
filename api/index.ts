import { z } from "zod";
import { randomUUID } from "crypto";
import { chatbotEngine } from "../server/chatbot-engine";

// Inline the schema to avoid @shared path alias issues on Vercel
const sendMessageSchema = z.object({
    message: z.string().min(1),
    conversationId: z.string().optional(),
});

// Standard Vercel Serverless Function exported as default
export default async function handler(req: any, res: any) {
    // Extract path to route manually
    const url = req.url || '';

    // Handle CORS preflight just in case
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // -------------------------------------------------------------------
        // POST /api/chat/message
        // -------------------------------------------------------------------
        if (req.method === 'POST' && url.includes('/chat/message')) {
            // Vercel already parses req.body automatically
            const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
            const { message, conversationId } = sendMessageSchema.parse(body);
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

            return res.status(200).json({ conversationId: convId, userMessage, botMessage: botResponse });
        }

        // -------------------------------------------------------------------
        // GET /api/chat/history/:conversationId
        // -------------------------------------------------------------------
        if (req.method === 'GET' && url.includes('/chat/history/')) {
            const parts = url.split('/');
            const conversationId = parts[parts.length - 1]; // Assume ID is at the end of the URL

            const history = chatbotEngine.getHistory(conversationId);
            return res.status(200).json({ messages: history });
        }

        // -------------------------------------------------------------------
        // DELETE /api/chat/history/:conversationId
        // -------------------------------------------------------------------
        if (req.method === 'DELETE' && url.includes('/chat/history/')) {
            const parts = url.split('/');
            const conversationId = parts[parts.length - 1];

            chatbotEngine.clearHistory(conversationId);
            return res.status(200).json({ success: true });
        }

        // Fallback for unmatched routes
        return res.status(404).json({ error: "API route not found" });

    } catch (error: any) {
        console.error("Chatbot API Error:", error);
        return res.status(400).json({ error: error.message || "Bad Request" });
    }
}


