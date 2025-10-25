"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✨</span>
              </div>
              <span className="font-bold text-lg">GDU Shine Bright</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Hỗ trợ sinh viên phát triển ý tưởng khởi nghiệp với AI Mentor thông minh.
            </p>
            <div className="space-y-2 text-sm text-white/70 pt-4 border-t border-white/10">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:lutrinaeotter27@gmail.com" className="hover:text-white transition">
                  lutrinaeotter27@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Điện thoại:</span>{" "}
                <a href="tel:0367616779" className="hover:text-white transition">
                  0367616779
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  AI Mentor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Công cụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tài nguyên
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Pháp lý</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Chính sách
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2025 GDU Shine Bright AI. Tất cả quyền được bảo lưu.</p>
            <div className="flex items-center gap-1">
              <span>Được tạo với</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>cho sinh viên</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
