"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, BarChart3, Loader2 } from "lucide-react";

export default function SmartMatchPage() {
  const [jd, setJd] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<{ score: number; missing: string[] } | null>(null);

  const handleScan = async () => {
    if (!jd) return alert("Please paste a Job Description first.");
    setIsScanning(true);
    
    // 调用后端向量匹配接口
    try {
      const res = await fetch("/api/match", {
        method: "POST",
        body: JSON.stringify({ jd }),
      });
      const data = await res.json();
      setResult(data);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="pl-64 flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">SmartMatch™ Analysis</h1>
            <p className="text-slate-400 font-medium mt-2">Predict deployment success based on JD-CV vector matching.</p>
          </div>

          <Card className="rounded-[32px] border-none shadow-sm overflow-hidden">
            <CardContent className="p-10 space-y-6">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Target Job Description</label>
              <textarea
                className="w-full h-80 p-6 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                placeholder="Paste the target Job Description (JD) here..."
                value={jd}
                onChange={(e) => setJd(e.target.value)}
              />
              <Button 
                onClick={handleScan}
                disabled={isScanning}
                className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
              >
                {isScanning ? <Loader2 className="animate-spin mr-2" /> : <Zap className="mr-2 w-4 h-4" />}
                Initiate Vector Scan
              </Button>
            </CardContent>
          </Card>

          {/* 扫描结果展示 */}
          {result && (
            <div className="grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 transition-all">
              <ResultCard title="Match Score" value={`${result.score}%`} icon={<Target className="text-indigo-600" />} />
              <ResultCard title="Missing Keywords" value={result.missing.length.toString()} icon={<BarChart3 className="text-amber-500" />} />
              <div className="col-span-3 bg-white p-8 rounded-[32px] border border-slate-100">
                <h4 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Optimization Tips</h4>
                <div className="flex flex-wrap gap-2">
                  {result.missing.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100">
                      + Add {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function ResultCard({ title, value, icon }: any) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center gap-2">
      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-2">{icon}</div>
      <span className="text-3xl font-black text-slate-900">{value}</span>
      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{title}</span>
    </div>
  );
}