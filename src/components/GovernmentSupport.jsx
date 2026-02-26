export default function GovernmentSupport() {
  const logos = [
    { src: "/assets/pub/logo1_1752331543209.png", alt: "한국산업인력공단" },
    { src: "/assets/pub/logo2_1752331543208.png", alt: "한국사회보장정보원" },
    { src: "/assets/pub/logo4_1752331543208.jpg", alt: "한국보건산업진흥원" },
    { src: "/assets/pub/logo4_1752331543208.png", alt: "한국건강관리협회" },
    { src: "/assets/pub/logo5_1752331543207.png", alt: "여성가족부" },
    { src: "/assets/pub/logo6_1752331543207.png", alt: "보건복지부" },
    { src: "/assets/pub/logo7_1752331543207.png", alt: "국민건강보험공단" },
    { src: "/assets/pub/logo8_1752331543206.png", alt: "고용노동부" },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="animate-scroll-horizontal whitespace-nowrap flex">
            {/* First set of logos */}
            <div className="flex items-center space-x-6 mr-6 flex-shrink-0">
              {logos.map((logo, index) => (
                <div key={index} className="w-32 h-20 bg-white border border-gray-200 shadow-sm flex-shrink-0 flex items-center justify-center p-2 opacity-75">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex items-center space-x-6 flex-shrink-0">
              {logos.map((logo, index) => (
                <div key={`dup-${index}`} className="w-32 h-20 bg-white border border-gray-200 shadow-sm flex-shrink-0 flex items-center justify-center p-2 opacity-75">
                  <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
