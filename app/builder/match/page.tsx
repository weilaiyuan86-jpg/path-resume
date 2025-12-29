'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function SmartMatch() {
  const { dict } = useLanguage();
  const [jdText, setJdText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 模拟 AI 分析逻辑 (后续对接 OpenAI API)
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000); 
  };

  return (
    <div className="p-10 max-w-6xl mx-auto animate-in fade-in duration-700">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black mb-2">{dict.smartMatch}</h2>
          <p className="text-slate-400 text-sm">Paste the Job Description to calculate your ATS Match Score.</p>
        </div>
        <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase">
          Powered by GPT-4o
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* 左侧：JD 输入区 */}
        <div className="col-span-7 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-50">
            <label className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 block">
              Job Description (JD)
            </label>
            <textarea 
              className="w-full h-64 bg-slate-50 border-none rounded-2xl p-6 font-medium text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Paste the job requirements here..."
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
            />
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className={`w-full mt-6 py-5 rounded-2xl font-black text-xs tracking-[0.2em] transition-all ${
                isAnalyzing ? 'bg-slate-200 text-slate-400' : 'bg-[#0f172a] text-white hover:scale-[1.02]'
              }`}
            >
              {isAnalyzing ? 'ANALYZING BY AI...' : 'RUN SMARTMATCH™ AUDIT'}
            </button>
          </div>
        </div>

        {/* 右侧：ATS 分数与建议 */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-50 relative overflow-hidden">
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-8 border-indigo-600 mb-4">
                <span className="text-2xl font-black italic">85</span>
              </div>
              <h4 className="text-[10px] font-black text-indigo-600 tracking-widest uppercase">ATS Match Score</h4>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-600 uppercase">Strong Match</p>
                <p className="text-xs text-emerald-800/60 mt-1">Distributed Systems, React, Node.js found.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-[10px] font-black text-orange-600 uppercase">Missing Keywords</p>
                <p className="text-xs text-orange-800/60 mt-1">AWS Lambda, Kubernetes (Highly Recommended)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}