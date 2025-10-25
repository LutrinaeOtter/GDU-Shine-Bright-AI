"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Benefits from "@/components/benefits"
import HowToUse from "@/components/how-to-use"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <HowToUse />
      <Contact />
      <Footer />
      <ChatBot isOpen={showChat} onToggle={() => setShowChat(!showChat)} />
    </main>
  )
}
