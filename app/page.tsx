'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // 检测用户语言并重定向
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.split('-')[0].toLowerCase();

    // 支持的语言列表
    const supportedLangs = ['en', 'zh', 'ja', 'tw', 'de', 'ko', 'fr'];

    // 如果用户语言在支持列表中，重定向到对应语言，否则默认英文
    const targetLang = supportedLangs.includes(lang) ? lang : 'en';

    router.push(`/${targetLang}`);
  }, [router]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Redirecting...</h1>
        <p>Please wait while we redirect you to the appropriate language version.</p>
      </div>
    </div>
  );
}