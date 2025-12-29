import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 导航栏优化 */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
          <h1 className="text-xl font-bold tracking-tight">CAREERBOOST<span className="text-blue-600">™</span></h1>
        </div>
        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-medium hover:text-blue-600 transition">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
        </div>
      </nav>

      {/* Hero 模块 */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          ✨ Powered by OpenAI o1-preview
        </div>
        <h2 className="text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent leading-tight">
          Master Your Career Path <br /> with AI Intelligence
        </h2>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          The only platform featuring FAANG Protocol Audit and SmartMatch™ AI technology to bridge the gap between your talent and your dream job.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/builder">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
              Start Building Now
            </button>
          </Link>
          <button className="px-8 py-4 bg-white border border-slate-200 hover:border-blue-200 text-slate-600 rounded-xl font-bold transition-all">
            View Live Demo
          </button>
        </div>
      </section>

      {/* 特性矩阵 */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "FAANG Protocol", desc: "Military-grade resume auditing based on internal FAANG standards.", icon: "🛡️" },
          { title: "Identity Matrix", desc: "Data-driven professional identity mapping for global impact.", icon: "🧬" },
          { title: "SmartMatch™", desc: "Real-time AI matching against 10,000+ job descriptions.", icon: "🎯" }
        ].map((item, idx) => (
          <div key={idx} className="p-8 border border-slate-100 rounded-3xl bg-white hover:shadow-xl hover:shadow-slate-100 transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}