import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 顶部导航 */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 px-6 py-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-black italic">CB</div>
          <span className="text-xl font-extrabold tracking-tighter">CAREERBOOST™</span>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut><SignInButton mode="modal"><button className="text-sm font-semibold hover:text-blue-600 transition">Login</button></SignInButton></SignedOut>
          <SignedIn><UserButton /></SignedIn>
        </div>
      </nav>

      {/* 主视觉区域 */}
      <section className="max-w-6xl mx-auto pt-24 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-bounce">
          🚀 Powered by OpenAI o1-preview
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          Master Your Career Path <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">with AI Intelligence</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          The only platform featuring FAANG Protocol Audit and SmartMatch™ technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/builder">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
              Start Building Now →
            </button>
          </Link>
          <button className="bg-white border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            View Live Demo
          </button>
        </div>
      </section>

      {/* 功能卡片 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "FAANG Protocol", desc: "Internal auditing standards from top tech companies.", icon: "🛡️" },
          { title: "Identity Matrix", desc: "Data-driven identity mapping for global impact.", icon: "🧬" },
          { title: "SmartMatch™", desc: "Real-time AI matching against 10,000+ job descriptions.", icon: "🎯" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
