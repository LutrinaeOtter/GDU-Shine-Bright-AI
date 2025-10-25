"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
              <span className="text-sm font-semibold text-primary">Về dự án</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">GDU Shine Bright AI</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dự án GDU Shine Bright AI được phát triển với mục đích hỗ trợ sinh viên và thanh niên trong hành trình
              khởi nghiệp. Chúng tôi kết hợp công nghệ AI tiên tiến với kinh nghiệm thực tế để tạo ra một nền tảng học
              tập và phát triển ý tưởng toàn diện.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Với AI Mentor thông minh, bạn sẽ nhận được hướng dẫn cá nhân hóa, giải pháp cho các thách thức kinh doanh,
              và hỗ trợ từ cộng đồng những người có cùng đam mê.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mục tiêu rõ ràng</p>
                  <p className="text-sm text-muted-foreground">Hỗ trợ khởi nghiệp</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Công nghệ AI</p>
                  <p className="text-sm text-muted-foreground">Hướng dẫn thông minh</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a
                href="https://v0-ai-website-builder-qlmw.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Bắt đầu sử dụng AI Mentor
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-6xl">
                💡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
