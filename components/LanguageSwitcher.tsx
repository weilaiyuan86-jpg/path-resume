'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex bg-slate-100 p-1 rounded-lg">
      {['EN', 'ZH', 'ES'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l.toLowerCase() as 'en' | 'zh' | 'es')}
          className={`px-3 py-1 text-[10px] font-bold rounded-md transition ${
            lang === l.toLowerCase() ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}