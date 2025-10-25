"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <span className="font-bold text-lg text-primary">GDU Shine Bright</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition">
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition"
            >
              Chức năng
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition"
            >
              Lợi ích
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="text-foreground hover:text-primary transition"
            >
              Cách sử dụng
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition"
            >
              Liên hệ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-2 hover:bg-muted rounded transition"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-left px-4 py-2 hover:bg-muted rounded transition"
            >
              Chức năng
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-left px-4 py-2 hover:bg-muted rounded transition"
            >
              Lợi ích
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="text-left px-4 py-2 hover:bg-muted rounded transition"
            >
              Cách sử dụng
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-2 hover:bg-muted rounded transition"
            >
              Liên hệ
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
