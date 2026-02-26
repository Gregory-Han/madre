export default function Policy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">전문 관리사를 위한 운영 방침</h2>
          <p className="text-xl text-gray-600">체계적인 관리와 지속적인 서비스 개선을 통해 최고의 케어를 제공합니다</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-message-square-text text-white h-6 w-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path d="M13 8H7"></path>
                <path d="M17 12H7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">고객 피드백 점검</h3>
            <p className="text-sm text-gray-600">서비스 초기 단계에서 고객님의 만족도를 확인하고<br /> 개선점을 파악합니다</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-clipboard-check text-white h-6 w-6">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="m9 14 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">사후평가 반영·서비스 보완</h3>
            <p className="text-sm text-gray-600">고객 평가를 분석하여 서비스 품질 향상에 반영하고<br /> 지속적으로 개선합니다</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-trending-up text-white h-6 w-6">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">우수사례·경력에 따른 등급관리</h3>
            <p className="text-sm text-gray-600">관리사의 경력과 우수사례를 바탕으로 등급을 관리하여<br /> 전문성을 보장합니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}
