"use client"

const steps = [
  {
    number: "01",
    title: "Đăng ký tài khoản",
    description: "Tạo tài khoản miễn phí trên GDU Shine Bright AI chỉ trong vài phút",
  },
  {
    number: "02",
    title: "Mô tả ý tưởng của bạn",
    description: "Chia sẻ ý tưởng khởi nghiệp của bạn với AI Mentor",
  },
  {
    number: "03",
    title: "Nhận tư vấn cá nhân hóa",
    description: "AI sẽ phân tích và cung cấp hướng dẫn chi tiết cho dự án của bạn",
  },
  {
    number: "04",
    title: "Phát triển và cải thiện",
    description: "Tiếp tục trò chuyện với AI để hoàn thiện kế hoạch kinh doanh",
  },
]

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
            <span className="text-sm font-semibold text-primary">Cách sử dụng</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Bắt đầu trong 4 bước đơn giản</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quy trình dễ dàng để bạn bắt đầu hành trình khởi nghiệp
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <div className="bg-white rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
