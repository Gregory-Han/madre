export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center ml-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              <img src="/assets/logo/madre_logo.png" alt="마드레 (Madre)" className="h-20 mt-2" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#services"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-6 rounded-lg block text-xl">서비스
              안내</a>
            <a href="#voucher"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-6 rounded-lg block text-xl">바우처
              안내</a>
            <a href="#contact"
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors py-4 px-6 rounded-lg block text-xl">문의하기</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:010-5509-0033" className="hover:scale-105 transition-transform duration-300">
              <img src="/assets/call.png" alt="3분 상담 바로 시작" style={{ width: '65px', height: '65px' }} title="3분상담 바로 시작" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
