"use client";

import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, Calendar, ShieldCheck } from "lucide-react";

export default function VisaHub() {
  return (
    <div className="pl-64 flex bg-white min-h-screen">
      <Sidebar />
      <main className="flex-1 p-16">
        <div className="max-w-5xl space-y-12">
          <header className="space-y-2">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">US Visa Hub</h1>
            <p className="text-slate-400 font-medium text-lg italic">Live regulatory updates for F-1 / OPT / H-1B holders.</p>
          </header>

          {/* 政策卡片网格 */}
          <div className="grid grid-cols-3 gap-8">
            <VisaCard 
              title="STEM OPT Extension" 
              icon={<Calendar className="w-5 h-5" />}
              desc="Learn how to apply for your 24-month extension within the valid window."
              action="CHECK CHECKLIST"
            />
            <VisaCard 
              title="H-1B Lottery 2024" 
              icon={<ShieldCheck className="w-5 h-5" />}
              desc="Fiscal year 2025 registration is now active. Review the new lottery rules."
              action="READ ANALYSIS"
            />
            {/* 特色卡片：失业期倒计时 */}
            <Card className="p-10 rounded-[40px] border-none bg-indigo-600 text-white shadow-xl shadow-indigo-100 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-black leading-tight">Unemployment Clock</h3>
                <Clock className="opacity-50" />
              </div>
              <p className="text-indigo-100 text-sm font-medium mb-10 leading-relaxed">
                Stay compliant with the 90-day unemployment limit during initial OPT.
              </p>
              <div className="mt-auto flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Status Tracking</span>
                <span className="text-sm font-black italic tracking-widest">72 DAYS REMAINING</span>
              </div>
              <button className="mt-6 text-[10px] font-black uppercase bg-white/10 hover:bg-white/20 py-3 rounded-xl transition-all tracking-[0.1em]">
                TRACK MY DAYS
              </button>
            </Card>
          </div>

          {/* 重要声明 */}
          <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-[32px] flex gap-6 items-start">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-amber-600 w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-black text-amber-900 uppercase text-xs tracking-widest">Important Disclaimer</h4>
              <p className="text-amber-800/70 text-sm font-medium leading-relaxed">
                The information provided on PathResume Visa Hub is for general guidance only and does not constitute formal legal advice. 
                U.S. immigration policies are subject to rapid change. Always consult with your DSO or a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function VisaCard({ title, icon, desc, action }: any) {
  return (
    <Card className="p-10 rounded-[40px] border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col group">
      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">{desc}</p>
      <button className="mt-auto text-left text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] italic group-hover:translate-x-1 transition-transform">
        {action} →
      </button>
    </Card>
  );
}