'use client';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function BuilderPage() {
  const { dict } = useLanguage(); // 实时获取当前语言字典

  return (
    <div className="min-h-screen p-8">
      {/* 右上角工具栏 */}
      <div className="flex justify-end items-center gap-4 mb-8">
        <LanguageSwitcher />
        <div className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black tracking-widest border border-indigo-100 italic">
          ● LIVE ENGINE
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* 身份矩阵编辑区 */}
        <div className="col-span-8 bg-white rounded-[2.5rem] p-12 shadow-sm border border-slate-50">
          <h2 className="text-4xl font-black text-slate-900 mb-2">{dict.identityMatrix}</h2>
          <p className="text-slate-400 font-medium mb-12">{dict.identityDesc}</p>
          
          <div className="grid grid-cols-2 gap-8">
            <InputGroup label={dict.givenName} placeholder="Alex" />
            <InputGroup label={dict.familyName} placeholder="Chen" />
          </div>

          <button className="mt-12 w-full py-5 bg-[#0f172a] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
            <span>📥</span> {dict.exportBtn}
          </button>
        </div>

        {/* 审计面板 */}
        <div className="col-span-4">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100">
            <h3 className="text-[10px] font-black tracking-[0.2em] text-slate-300 mb-8 uppercase">
              {dict.auditTitle}
            </h3>
            {/* 审计项... */}
            <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
              <div className="text-xs font-black text-emerald-500 uppercase tracking-tighter">
                80% {dict.matched}
              </div>
              {/* 圆形进度条组件... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{label}</label>
      <input className="w-full bg-[#f8faff] border-none rounded-2xl p-5 text-slate-900 font-bold placeholder:text-slate-200 focus:ring-2 focus:ring-indigo-500 transition" placeholder={placeholder} />
    </div>
  );
}