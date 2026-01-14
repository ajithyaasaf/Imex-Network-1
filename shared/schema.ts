import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Chatbot Message Schema
export const chatMessageSchema = z.object({
  id: z.string(),
  role: z.enum(['user', 'bot']),
  content: z.string(),
  timestamp: z.number(),
  quickReplies: z.array(z.string()).optional(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

export const sendMessageSchema = z.object({
  message: z.string().min(1),
  conversationId: z.string().optional(),
});

export type SendMessage = z.infer<typeof sendMessageSchema>;
