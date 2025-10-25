"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, X, MessageCircle, Loader2, Mail, Phone } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatBot({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! 👋 Tôi là AI Mentor của GDU Shine Bright. Tôi sẵn sàng giúp bạn phát triển ý tưởng khởi nghiệp. Bạn có ý tưởng gì muốn chia sẻ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Ý tưởng của bạn rất thú vị! Hãy cho tôi biết thêm về thị trường mục tiêu của bạn.",
        "Tuyệt vời! Bạn đã xem xét các đối thủ cạnh tranh chưa?",
        "Đó là một hướng đi tốt. Bạn có kế hoạch tài chính cho dự án này không?",
        "Tôi thích cách bạn suy nghĩ. Hãy tập trung vào giá trị cốt lõi mà bạn mang lại cho khách hàng.",
        "Đó là một điểm quan trọng. Hãy xem xét cách bạn có thể xác thực ý tưởng này với khách hàng thực tế.",
      ]
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
      >
        <MessageCircle size={24} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-border z-40">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">AI Mentor</h3>
          <p className="text-sm text-white/80">Luôn sẵn sàng giúp bạn</p>
        </div>
        <button onClick={onToggle} className="p-2 hover:bg-white/20 rounded-lg transition">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-muted text-foreground rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">Đang suy nghĩ...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 space-y-3">
        <div className="bg-primary/5 rounded-lg p-3 space-y-2 text-sm">
          <p className="font-semibold text-foreground">Liên hệ trực tiếp:</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail size={16} />
            <a href="mailto:lutrinaeotter27@gmail.com" className="hover:text-primary transition">
              lutrinaeotter27@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <a href="tel:0367616779" className="hover:text-primary transition">
              0367616779
            </a>
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg"
          >
            <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  )
}
