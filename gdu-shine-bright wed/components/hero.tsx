"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Khởi động dự án mới</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            <span className="text-foreground">Bạn có ý tưởng khởi nghiệp?</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Mentor sẽ giúp bạn
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            GDU Shine Bright AI là nền tảng hỗ trợ sinh viên và thanh niên phát triển ý tưởng khởi nghiệp thành hiện
            thực với sự hướng dẫn của AI Mentor thông minh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 justify-center"
            >
              Bắt đầu ngay
              <ArrowRight size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("features")}
              variant="outline"
              className="px-8 py-6 text-lg rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5"
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
