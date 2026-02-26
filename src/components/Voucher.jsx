export default function Voucher() {
  return (
    <section id="voucher" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-4 md:p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">산후도우미 지원제도 안내</h2>
              <p className="text-lg mb-8 opacity-90">2025년부터 친정엄마까지 지원 대상이 확대되어<br />
                더욱 안정적인 산후조리 기간을 확보할 수 있습니다</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-clock text-white h-4 w-4">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">신청 기간</h4>
                    <p className="opacity-90">출산예정일 40일 전부터 출산 후 60일까지 신청 가능</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-users text-white h-4 w-4">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">지원 대상</h4>
                    <p className="opacity-90">국내에 주민등록 또는 외국인 등록을 둔 출산 가정</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-shield text-white h-4 w-4">
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">소득 기준</h4>
                    <p className="opacity-90">건강보험료 기준 중위소득 150% 이하 <span className="text-sm">(*지자체에 따라 상이)</span><br />(4인 가구 기준 월소득 약 8,595,000원 이하)</p>
                  </div>
                </div>
                <div className="rounded-xl px-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="h-12 bg-white rounded-md flex items-center justify-center mx-auto mb-4">
                    <a href="https://www.hscity.go.kr/health/business/region/motherchild/motherchild04.jsp" title="화성시 산모신생아 건강관리지원사업" target="_blank">
                      <img src="/assets/pub/hscity.png" alt="길이 열리는 화성특례시 보건소 로고" className="w-20 h-20 object-contain" />
                    </a>
                  </div>
                  <div className="h-12 bg-white rounded-md flex items-center justify-center mx-auto mb-4">
                    <a href="https://www.yongin.go.kr/home/health/healthSvc/mcHealth/mcHealth09/mcHealth10.jsp" title="용인시 산모신생아 건강관리지원사업" target="_blank">
                      <img src="/assets/pub/yicity.png" alt="용인특례시 보건소 로고" className="w-20 h-20 object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">산모·신생아 건강관리사 교육 안내 <br /> (2025년부터 친정엄마도 신청가능)</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">교육 시간</h4>
                  <p className="opacity-90">40~60시간 (평생유지)</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">교육 비용</h4>
                  <p className="opacity-90">약 20~25만원</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">교육 내용</h4>
                  <p className="opacity-90">산모 관리, 신생아 돌보기, 위생관리, 응급상황 대처</p>
                </div>
              </div>
              <a href="tel:010-5509-0033"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-blue-600 hover:bg-white/90 mt-6 w-full">
                교육 신청하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
