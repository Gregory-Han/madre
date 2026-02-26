import { useState } from 'react';
import TermsDialog from './TermsDialog';

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer id="footer" className="bg-blue-50 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/assets/logo/madre_logo.png" alt="마드레 (Madre)" className="h-24" />
            </div>
            <p className="text-blue-600 mb-4">신뢰할 수 있는<br /> 산모 신생아 건강관리사 매칭 플랫폼</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">서비스</h4>
            <ul className="space-y-2 text-gray-500">
              <li>산모 케어</li>
              <li>신생아 케어</li>
              <li>가사 지원</li>
              <li>바우처 안내</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">회사 소개</h4>
            <ul className="space-y-2 text-gray-500">
              <li>마드레 소개</li>
              <li>관리사 등록</li>
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  이용약관
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  개인정보처리방침
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-500">고객지원</h4>
            <ul className="space-y-2 text-gray-500">
              <li>동탄점&nbsp;&nbsp;&nbsp;031-376-9906</li>
              <li>용인점&nbsp;&nbsp;&nbsp;031-8003-9907</li>
              <li>휴대폰&nbsp;&nbsp;&nbsp;010-5509-0033</li>
              <li>이메일&nbsp;&nbsp;&nbsp;madre.kr@naver.com</li>
              <li>평&nbsp;&nbsp;&nbsp;일&nbsp;&nbsp;&nbsp;09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-400">
          <p> © 2024 ~ 마드레(Madre). 모든 권리 보유.<br />All Rights Reserved by Madre.</p>
        </div>
      </div>

      <TermsDialog
        open={isTermsOpen}
        onOpenChange={setIsTermsOpen}
        title="마드레 이용약관"
      >
        <iframe
          src="/terms/termsOfUse.html"
          className="w-full h-full border-none"
          title="이용약관"
        />
      </TermsDialog>

      <TermsDialog
        open={isPrivacyOpen}
        onOpenChange={setIsPrivacyOpen}
        title="개인정보처리방침"
      >
        <iframe
          src="/terms/privacyPolicy.html"
          className="w-full h-full border-none"
          title="개인정보처리방침"
        />
      </TermsDialog>
    </footer>
  );
}
