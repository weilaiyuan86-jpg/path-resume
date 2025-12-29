'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex bg-[#f1f5f9] p-1 rounded-lg border border-slate-200">
      {['EN', 'ZH', 'ES'].map((l) => {
        const code = l.toLowerCase() as 'en' | 'zh' | 'es';
        const isActive = lang === code;
        return (
          <button
            key={l}
            onClick={() => setLang(code)}
            className={`px-3 py-1 text-[10px] font-black rounded-md transition-all duration-200 ${
              isActive 
                ? 'bg-[#4f46e5] text-white shadow-md' // 匹配设计稿的紫色/深蓝色高亮
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}