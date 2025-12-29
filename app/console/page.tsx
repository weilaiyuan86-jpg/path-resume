"use client";

import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  BarChart3, 
  ArrowUpRight, 
  Clock, 
  FileText, 
  Search,
  ChevronRight
} from "lucide-react";

export default function ConsolePage() {
  return (
    <div className="pl-64 flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-12 space-y-12">
        {/* Header Section */}
        <header className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Welcome back, Alex 👋</h1>
            <p className="text-slate-400 font-medium">Your current resume matches <span className="text-indigo-600 font-bold">80%</span> of Senior Software Engineer roles.</p>
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-12 bg-white rounded-2xl border flex items-center justify-center shadow-sm">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <button className="h-12 px-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all">
              New Deployment
            </button>
          </div>
        </header>

        {/* 核心指标四宫格 */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard label="ATS Integrity" value="80/100" change="+5%" icon={<Target className="text-indigo-600" />} />
          <StatCard label="Deployments" value="12" change="+2" icon={<Zap className="text-amber-500" />} />
          <StatCard label="Key Tags" value="06" change="Optimal" icon={<BarChart3 className="text-emerald-500" />} />
          <StatCard label="Visa Buffer" value="72d" change="Action Needed" color="text-rose-500" icon={<Clock className="text-rose-500" />} />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* System Operations - 左侧双倍宽度 */}
          <div className="col-span-2 space-y-6">
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">System Operations</h3>
            <div className="grid grid-cols-2 gap-4">
              <OpCard 
                title="Edit Master CV" 
                sub="Refine your core identity matrix and impact stories."
                icon={<FileText className="text-indigo-600" />}
              />
              <OpCard 
                title="Vector Sync" 
                sub="Align your resume with a specific job description."
                icon={<Zap className="text-amber-500" />}
              />
            </div>
            
            {/* 最近活跃记录 */}
            <div className="bg-white rounded-[32px] border border-slate-100 p-8">
              <h4 className="text-sm font-black mb-6">Recent Deployments</h4>
              <div className="space-y-4">
                {[
                  { company: 'Google', role: 'L4 Software Engineer', status: '85%', date: '2h ago' },
                  { company: 'Amazon', role: 'SDE II', status: '72%', date: '1d ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl border flex items-center justify-center font-bold text-xs">{item.company[0]}</div>
                      <div>
                        <p className="text-sm font-bold">{item.company}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-black text-indigo-600 italic">{item.status} MATCH</span>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Updates - 右侧单倍宽度 */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Live Updates</h3>
            <div className="bg-white rounded-[32px] border border-slate-100 p-8 space-y-8">
              <UpdateItem title="STEM OPT Rule Change" desc="New guidance on remote work for F-1 students." time="2h ago" type="VISA" />
              <UpdateItem title="H1-B Lottery Phase 2" desc="USCIS begins second round of selections." time="1d ago" type="POLICY" />
              <UpdateItem title="Market Trends" desc="Increased demand for Rust/Go in SF area." time="3d ago" type="TREND" />
              <button className="w-full py-4 text-[10px] font-black uppercase text-slate-400 border-t border-slate-50 hover:text-indigo-600 transition-colors">
                View All Updates
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// 辅助组件：指标卡片
function StatCard({ label, value, change, icon, color = "text-slate-900" }: any) {
  return (
    <Card className="p-8 rounded-[32px] border-none shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center">{icon}</div>
        <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">{change}</span>
      </div>
      <div>
        <span className={`text-3xl font-black tracking-tighter ${color}`}>{value}</span>
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] mt-1">{label}</p>
      </div>
    </Card>
  );
}

// 辅助组件：操作卡片
function OpCard({ title, sub, icon }: any) {
  return (
    <button className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col text-left hover:border-indigo-200 transition-all group">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-lg font-black mb-2 flex items-center gap-2">
        {title} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
      </h4>
      <p className="text-xs text-slate-400 font-medium leading-relaxed">{sub}</p>
    </button>
  );
}

// 辅助组件：实时消息
function UpdateItem({ title, desc, time, type }: any) {
  return (
    <div className="space-y-2 group cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-black px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded uppercase tracking-widest">{type}</span>
        <span className="text-[10px] text-slate-300 font-bold">{time}</span>
      </div>
      <h5 className="text-sm font-bold group-hover:text-indigo-600 transition-colors">{title}</h5>
      <p className="text-[11px] text-slate-400 font-medium leading-normal">{desc}</p>
    </div>
  );
}