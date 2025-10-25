"use client"

import { Brain, MessageSquare, Lightbulb, TrendingUp, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Mentor Thông Minh",
    description: "Nhận tư vấn cá nhân hóa từ AI Mentor được huấn luyện với kiến thức khởi nghiệp",
  },
  {
    icon: MessageSquare,
    title: "Trò chuyện 24/7",
    description: "Hỏi đáp bất cứ lúc nào về ý tưởng, kế hoạch kinh doanh, và chiến lược phát triển",
  },
  {
    icon: Lightbulb,
    title: "Phát triển ý tưởng",
    description: "Từ ý tưởng ban đầu đến kế hoạch chi tiết, AI sẽ giúp bạn hoàn thiện mọi khía cạnh",
  },
  {
    icon: TrendingUp,
    title: "Phân tích thị trường",
    description: "Hiểu rõ thị trường, cạnh tranh, và cơ hội phát triển cho dự án của bạn",
  },
  {
    icon: Users,
    title: "Cộng đồng hỗ trợ",
    description: "Kết nối với những người có cùng đam mê và chia sẻ kinh nghiệm",
  },
  {
    icon: Zap,
    title: "Công cụ hữu ích",
    description: "Truy cập các mẫu, công cụ, và tài nguyên để tăng tốc độ phát triển",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
            <span className="text-sm font-semibold text-primary">Chức năng</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Những gì AI Mentor có thể làm cho bạn</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Một bộ công cụ toàn diện để hỗ trợ hành trình khởi nghiệp của bạn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
