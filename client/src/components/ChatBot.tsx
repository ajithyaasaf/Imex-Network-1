import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { type ChatMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import bgImage from "@assets/hero 2_1757675986777.png";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [conversationId, setConversationId] = useState<string | undefined>();
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'bot',
        content: "Hello! Welcome to IMEX - your trusted partner in global sourcing! 👋 I'm here to help you with any questions about our services, projects, or how we can transform your space. How can I assist you today?",
        timestamp: Date.now(),
        quickReplies: ['Tell me about IMEX', 'What services do you offer?', 'Show me your projects', 'How do I get started?']
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat/message", {
        message,
        conversationId
      });
      return response.json();
    },
    onSuccess: (data) => {
      setConversationId(data.conversationId);
      setMessages(prev => [...prev, data.userMessage, data.botMessage]);
      setIsTyping(false);
    },
    onError: (error: Error) => {
      setIsTyping(false);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || inputMessage.trim();
    if (!messageToSend) return;

    setInputMessage("");
    setIsTyping(true);
    sendMessageMutation.mutate(messageToSend);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          data-testid="button-open-chat"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative bg-gradient-to-r from-imex-red to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110">
              <Bot className="w-7 h-7" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-imex-red to-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg" data-testid="text-chat-title">IMEX Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
              data-testid="button-close-chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <ScrollArea className="flex-1 h-full p-4 relative z-10">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-testid={`message-${msg.role}-${msg.id}`}
                  >
                    {msg.role === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-imex-red to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl p-3 ${msg.role === 'user'
                          ? 'bg-gradient-to-r from-imex-red to-red-600 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md'
                        }`}
                    >
                      <p className="text-sm whitespace-pre-wrap" data-testid={`text-message-content-${msg.id}`}>
                        {msg.content}
                      </p>
                      {msg.quickReplies && msg.quickReplies.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.quickReplies.map((reply, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickReply(reply)}
                              className="text-xs bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 text-red-700 dark:text-red-300 px-3 py-1.5 rounded-full hover:from-red-100 hover:to-red-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 hover:scale-105 border border-red-200 dark:border-gray-500"
                              data-testid={`button-quick-reply-${index}`}
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start" data-testid="typing-indicator">
                    <div className="w-8 h-8 bg-gradient-to-br from-imex-red to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-md">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border-gray-300 dark:border-gray-600 focus:border-imex-red dark:focus:border-imex-red"
                disabled={sendMessageMutation.isPending}
                data-testid="input-chat-message"
              />
              <Button
                type="submit"
                disabled={!inputMessage.trim() || sendMessageMutation.isPending}
                className="bg-gradient-to-r from-imex-red to-red-600 hover:from-red-600 hover:to-imex-red text-white"
                data-testid="button-send-message"
              >
                {sendMessageMutation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
