const shortsData = [
  {
    id: 1,
    url: "https://m.naver.com/shorts/?mediaId=71EC9853AF7A9B920FFD32DE8401DD720D7C&serviceType=CLIP&recType=CLIP_SEARCH&recId=%7B%22type%22%3A%22INFO_TAG%22%2C%22order%22%3A%22RELATED%22%2C%22query%22%3A%22place_2081409709%22%2C%22seedIndex%22%3A1%7D",
    thumb: "https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fclip-service-phinf.pstatic.net%2FMjAyNjAyMTdfNDQg%2FMDAxNzcxMzM0MDQ5OTc1.E7osoMXY6egGNOg-qs7kj5kq6Rq4N31FMTNh1COe1Pgg.N510Kfq30YJ3G4SoHgz3jYrkvc8_IXB1ASOxEGYsd2Yg.JPEG%2Fthumbnail-75BB4019-5619-4AAC-8C0C-3908FBDB759E.jpg",
    video: "/assets/shorts/short_01.mp4"
  },
  {
    id: 2,
    url: "https://m.naver.com/shorts/?mediaId=47AA7EE83C9B0460D6057F0CCCD89C1657BB&serviceType=CLIP&recType=CLIP_SEARCH&recId=%7B%22type%22%3A%22INFO_TAG%22%2C%22order%22%3A%22RELATED%22%2C%22query%22%3A%22place_2081409709%22%2C%22seedIndex%22%3A2%7D",
    thumb: "https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fclip-service-phinf.pstatic.net%2FMjAyNTEyMTlfMjky%2FMDAxNzY2MTQyNDIwOTk5.bw17080Toq5egO4ZkmYCEbQ2A74vIWvC2U3gN61Ygcgg.zmSdBL5f7LpGcD7cF1xP1nJVxnPTGEisPF6eqLcQX7wg.JPEG%2Fthumbnail-9EE5CEF6-F63B-4529-982C-B0E2F77C5341.jpg",
    video: "/assets/shorts/short_02.mp4"
  }
];

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-linear-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug" style={{ lineHeight: 1.4 }}>
              엄마와 아가의<br />
              <span className="text-blue-600">충분한 회복</span>을 위해<br />
              최선을 다하겠습니다
            </h1>
            <p className="text-base text-gray-600 mb-12 font-medium">
              출산의 끝, 케어의 시작 '마드레'와 함께하세요
            </p>
            <div className="mt-2 flex items-center space-x-6 mb-4">
              <span className="flex items-center text-sm text-gray-600">
                <svg className="text-blue-600 mr-1 h-5 w-5" fill="none"
                  stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>정부 바우처 지원</span>
              <span className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-award text-blue-600 mr-1 h-5 w-5">
                  <path
                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                  </path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                전문 자격증 보유</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:031-376-9906"
                className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white px-6 py-3 rounded-lg text-center">3분
                상담 바로 시작</a>
              <a href="tel:031-376-9906"
                className="border border-blue-600 text-blue-600 font-bold px-6 py-3 rounded-lg text-center flex items-center justify-center">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.08.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z" />
                </svg>지금 확인하기</a>
            </div>
          </div>
          <div className="relative -ml-4 flex justify-center lg:justify-end">
            <img src="/assets/madre_home_01.jpg" alt="마드레 신생아 케어 & 산후 조리 서비스" className="w-full max-w-125 h-auto lg:h-125 object-contain" />
          </div>
        </div>

        {/* Naver Shorts/Clip Reel */}
        <div className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              마드레 스토리 <span className="text-blue-600 italic">Clip</span>
            </h2>
          </div>
          
          <div className="relative group">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x no-scrollbar justify-center sm:justify-start lg:justify-center">
              {shortsData.map((item) => (
                <a 
                  key={item.id}
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative shrink-0 w-40 sm:w-55 aspect-9/16 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 snap-center group/item"
                >
                  {/* Video Background */}
                  <video 
                    src={item.video}
                    poster={item.thumb}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity" />
                  
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Video (Optional: could add actual video hover play logic here) */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
