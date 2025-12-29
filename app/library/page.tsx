"use client";

import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { BookOpen, Award, Terminal, Users, Lightbulb, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Google XYZ Formula",
    desc: "Accomplished [X] as measured by [Y], by doing [Z]. The gold standard for tech resumes.",
    icon: <Award className="text-indigo-600" />,
    tag: "RESUME STRATEGY"
  },
  {
    title: "Action Verbs Library",
    desc: "300+ strong verbs categorized by impact areas (Leadership, Technical, Creative).",
    icon: <Terminal className="text-emerald-500" />,
    tag: "VOCABULARY"
  },
  {
    title: "Networking Templates",
    desc: "Proven LinkedIn outreach scripts for coffee chats and referrals.",
    icon: <Users className="text-amber-500" />,
    tag: "NETWORKING"
  },
  {
    title: "H1-B Sponsor Database",
    desc: "List of tech companies that historicaly sponsor H1-B visas for internationals.",
    icon: <Lightbulb className="text-rose-500" />,
    tag: "CAREER PATH"
  }
];

export default function LibraryPage() {
  return (
    <div className="pl-64 flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-12 space-y-12">
        <header>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Career Library</h1>
          <p className="text-slate-400 font-medium mt-2 italic">Pro-level resources for the US Tech job market.</p>
        </header>

        {/* 资源网格 */}
        <div className="grid grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <Card key={i} className="p-10 rounded-[40px] border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group bg-white">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                  {res.icon}
                </div>
                <span className="text-[9px] font-black px-3 py-1 bg-slate-100 text-slate-400 rounded-full tracking-widest uppercase">
                  {res.tag}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{res.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                {res.desc}
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] tracking-widest uppercase italic">
                Open Guide <ArrowRight size={14} />
              </div>
            </Card>
          ))}
        </div>

        {/* 互动模块：Google XYZ 实时指导 */}
        <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black mb-6">Master the XYZ Formula</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-center border-l-4 border-indigo-500 pl-6">
                <span className="text-indigo-400 font-black text-2xl">X</span>
                <p className="text-slate-300 text-sm italic">"Accomplished [Result]..." (e.g., Increased conversion by 20%)</p>
              </div>
              <div className="flex gap-4 items-center border-l-4 border-emerald-500 pl-6">
                <span className="text-emerald-400 font-black text-2xl">Y</span>
                <p className="text-slate-300 text-sm italic">"As measured by [Metric]..." (e.g., in a 3-month A/B testing phase)</p>
              </div>
              <div className="flex gap-4 items-center border-l-4 border-amber-500 pl-6">
                <span className="text-amber-400 font-black text-2xl">Z</span>
                <p className="text-slate-300 text-sm italic">"By doing [Action]..." (e.g., implementing a new React-based UI component)</p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-50px] bottom-[-50px] opacity-10">
            <Award size={400} />
          </div>
        </div>
      </main>
    </div>
  );
}