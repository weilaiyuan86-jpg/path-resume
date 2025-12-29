import React from 'react';

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部状态栏 */}
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Session:</span>
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 italic">SECURE_TUNNEL_ESTABLISHED</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg">Drafts</button>
          <button className="px-4 py-2 text-sm font-bold bg-slate-900 text-white rounded-lg shadow-sm">Export PDF</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
        {/* 左侧：Identity Matrix 编辑区 */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-800">Identity Matrix</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Given Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Family Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition" placeholder="Doe" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Professional Title</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-500 transition" placeholder="Senior Software Engineer @ FAANG" />
              </div>
            </div>
          </section>
        </div>

        {/* 右侧：审计面板 */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <section className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-orange-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              FAANG Protocol Audit
            </h2>
            
            <div className="space-y-6">
              {[
                { label: "Auth Email Format", status: "Passed", color: "text-green-400" },
                { label: "US Location Syntax", status: "Warning", color: "text-orange-400" },
                { label: "AI Matching Score", status: "88%", color: "text-blue-400" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="text-slate-400 font-medium">{item.label}</span>
                  <span className={`font-mono font-bold ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-bold transition-all shadow-lg shadow-orange-900/20">
              Run Full Diagnostic
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}