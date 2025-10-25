"use client"

import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Tiết kiệm thời gian tìm kiếm thông tin và tư vấn",
  "Nhận hướng dẫn từ AI được huấn luyện chuyên sâu",
  "Phát triển kỹ năng khởi nghiệp thông qua thực hành",
  "Kết nối với cộng đồng sinh viên khởi nghiệp",
  "Truy cập tài nguyên và công cụ miễn phí",
  "Tăng cơ hội thành công cho dự án của bạn",
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <div className="aspect-square bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-6xl">
                🎓
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-lg">
              <span className="text-sm font-semibold text-accent">Lợi ích</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Tại sao chọn GDU Shine Bright AI?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chúng tôi cung cấp một nền tảng toàn diện giúp bạn biến ý tưởng thành hiện thực một cách hiệu quả và có hệ
              thống.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
