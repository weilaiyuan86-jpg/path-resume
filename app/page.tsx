import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* 现代导航栏 */}
      <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">C</div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">CAREERBOOST<span className="text-blue-600">™</span></h1>
        </div>
        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn><UserButton /></SignedIn>
        </div>
      </nav>

      {/* Hero 模块 - 增加垂直间距和对比度 */}
      <div className="max-w-6xl mx-auto px-8 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-10 border border-blue-100">
          ✨ Powered by OpenAI o1-preview
        </div>
        <h2 className="text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-slate-900">
          Master Your Career Path <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">with AI Intelligence</span>
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          The only platform featuring <span className="text-slate-900 font-semibold underline decoration-blue-500 decoration-2">FAANG Protocol Audit</span> and SmartMatch™ AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/builder">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95">
              Start Building Now
            </button>
          </Link>
          <button className="px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
            View Live Demo
          </button>
        </div>
      </div>

      {/* 特性矩阵 - 卡片式布局 */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100">
        {[
          { title: "FAANG Protocol", desc: "Military-grade resume auditing based on internal FAANG standards.", icon: "🛡️" },
          { title: "Identity Matrix", desc: "Data-driven professional identity mapping for global impact.", icon: "🧬" },
          { title: "SmartMatch™", desc: "Real-time AI matching against 10,000+ job descriptions.", icon: "🎯" }
        ].map((item, idx) => (
          <div key={idx} className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
