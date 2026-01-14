import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatbotEngine } from "./chatbot-engine";
import { sendMessageSchema, type ChatMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot routes
  app.post("/api/chat/message", async (req, res) => {
    try {
      const { message, conversationId } = sendMessageSchema.parse(req.body);
      
      const convId = conversationId || randomUUID();
      
      // Create user message
      const userMessage: ChatMessage = {
        id: randomUUID(),
        role: 'user',
        content: message,
        timestamp: Date.now()
      };
      
      chatbotEngine.addToHistory(convId, userMessage);
      
      // Simulate typing delay for more natural feel (300-800ms)
      const typingDelay = 300 + Math.random() * 500;
      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      // Generate bot response
      const botResponse = chatbotEngine.generateResponse(message, convId);
      
      res.json({
        conversationId: convId,
        userMessage,
        botMessage: botResponse
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/chat/history/:conversationId", async (req, res) => {
    try {
      const { conversationId } = req.params;
      const history = chatbotEngine.getHistory(conversationId);
      res.json({ messages: history });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.delete("/api/chat/history/:conversationId", async (req, res) => {
    try {
      const { conversationId } = req.params;
      chatbotEngine.clearHistory(conversationId);
      res.json({ success: true });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
