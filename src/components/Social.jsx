export default function Social() {
  const reviews = [
    {
      id: 1,
      img: "/assets/clients_msg/msg_01.png",
      url: "https://m.place.naver.com/my/5eff122bee06165e651d6ea3/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=6905848788ceb24b56f0fcbb"
    },
    {
      id: 2,
      img: "/assets/clients_msg/msg_02.png",
      url: "https://m.place.naver.com/my/61f135f727c8616e38e6bee3/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=68ffa75fb6d8ed854c38b934"
    },
    {
      id: 3,
      img: "/assets/clients_msg/msg_03.png",
      url: "https://m.place.naver.com/my/5c566a816f05108078db9c1f/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=699be96eb64eebffd07a4958"
    },
    {
      id: 5,
      img: "/assets/clients_msg/msg_04.png",
      url: "https://m.place.naver.com/my/5bd69581f1168e1a98a39c8b/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=6972d7eeae8a41f0cd4fff72"
    },
    {
      id: 6,
      img: "/assets/clients_msg/msg_05.png",
      url: "https://m.place.naver.com/my/5b9f1ec493b72dd63b367750/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=696dbd83bf193029e7368403"
    },
    {
      id: 7,
      img: "/assets/clients_msg/msg_06.png",
      url: "https://m.place.naver.com/my/5e98683d8f87a842bc91f4c3/reviewfeed?sort=VISIT_DATE_TIME_DESC&mediaFilter=WITH_MEDIA&reviewId=698fd253f0e8778ec35641fe"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="text-center lg:text-left w-full lg:w-[30%]">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">마드레와 함께하세요</h2>
            <p className="text-xl text-gray-600 mb-8">최신 정보와 유용한 육아 팁을 만나보세요</p>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://www.youtube.com/@madre.official" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-youtube h-8 w-8">
                  <path
                    d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                  </path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg></a>
              <a href="https://www.instagram.com/madre.kr/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-instagram h-8 w-8">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://blog.naver.com/madre-korea" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                <img src="/assets/sns/naver_blog.png" alt="마드레 산후 도우미 블로그(네이버)" className="w-full h-full object-contain" />
              </a>
              <a href="https://talk.naver.com/ct/w092nih" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                <img src="/assets/sns/naver_toktok.png" alt="마드레 산후 도우미 톡톡(네이버)" className="w-full h-full object-contain" />
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-600"><strong>유튜브</strong>: @madre.official</p>
              <p className="text-sm text-gray-600"><strong>인스타그램</strong>: @madre.kr</p>
              <p className="text-sm text-gray-600"><strong>블로그</strong>: <a href="https://blog.naver.com/madre-korea" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 transition-colors">madre-korea</a></p>
              <p className="text-sm text-gray-600"><strong>네이버 톡톡</strong>: <a href="https://talk.naver.com/ct/w092nih" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 transition-colors">madre-korea</a></p>
            </div>
          </div>
          {/* Client Review Slider */}
          <div className="w-full overflow-hidden mt-8 lg:mt-0">
            <div className="animate-scroll-horizontal whitespace-nowrap flex w-max">
              {/* 반복되는 데이터 세트를 한 줄로 펼침 */}
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <div 
                  key={`${review.id}-${index}`} 
                  className="inline-block w-[300px] sm:w-[380px] lg:w-[450px] h-[250px] lg:h-[500px] bg-white border border-gray-200 shadow-sm 
                      rounded-3xl mr-6 flex-shrink-0 p-6 overflow-hidden hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <a href={review.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                    <img src={review.img} alt={`고객 후기 ${review.id}`} className="max-w-full max-h-full object-contain" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
