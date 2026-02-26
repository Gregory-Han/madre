export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: 1.4 }}>산모님을 위한<br /><span
            className="text-blue-600">충분한 상담</span>을 받아보세요</h2>
          <p className="text-xl text-gray-600 mb-8">전문 상담사가 산모님의 상황에 맞는<br />최적의 케어 서비스를 안내해드립니다</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center fade-in-up animate-delay-100 flex flex-col gap-2">
            <a href="tel:031-376-9906">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-phone text-white h-8 w-8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">전화 상담</h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">동탄점&nbsp;&nbsp;&nbsp;031-376-9906</p>
              </div>
            </a>
            <div className="flex flex-col gap-2 ml-2">
              <a href="tel:031-8003-9907">
                <p className="text-gray-600">용인점&nbsp;&nbsp;&nbsp;031-8003-9907</p>
              </a>
            </div>
          </div>
          <div className="text-center fade-in-up animate-delay-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-mail text-white h-8 w-8">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">이메일 상담</h3>
            <p className="text-gray-600">
              <a target="_blank" href="mailto:madre_korea@naver.com" className="underline">madre_korea@naver.com</a>
            </p>
          </div>
          <div className="text-center fade-in-up animate-delay-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-map-pin text-white h-8 w-8">
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                </path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">오시는 길</h3>
            <div className="flex flex-col gap-1">
              <a target="_blank" href="https://map.naver.com/p/search/%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%8F%99%ED%83%84%EC%A7%80%EC%84%B1%EB%A1%9C%2011%20705%ED%98%B8/address/14145679.6457103,4467649.0458933,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%8F%99%ED%83%84%EC%A7%80%EC%84%B1%EB%A1%9C%2011,new?c=15.00,0,0,0,dh&isCorrectAnswer=true">
                <div className="flex justify-center ml-4 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-blue-500 pb-2" viewBox="0 0 20 22" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-600">화성시 동탄지성로 11 705호</span>
                </div>
              </a>
              <a target="_blank" href="https://map.naver.com/p/search/%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%A3%BD%EC%A0%84%EB%A1%9C%2010%206199%ED%98%B8/address/14149806.9494148,4483840.7971461,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EA%B8%B0%ED%9D%A5%EA%B5%AC%20%EC%A3%BD%EC%A0%84%EB%A1%9C%2010,new?c=15.00,0,0,0,dh&isCorrectAnswer=true">
                <div className="flex justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-blue-500 pb-2" viewBox="0 0 20 22" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-600">용인시 죽전로 10 6199호</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
