export default function Editor() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* 中间编辑区 */}
      <div className="col-span-8 bg-white rounded-[2.5rem] border border-slate-100 p-12 shadow-sm">
        <h2 className="text-3xl font-black mb-2">Identity Matrix</h2>
        <p className="text-slate-400 mb-10">Refine your core contact information for global recruitment standard.</p>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <InputGroup label="GIVEN NAME" placeholder="Alex" />
          <InputGroup label="FAMILY NAME" placeholder="Chen" />
          <InputGroup label="PREFERRED NAME / ALIAS" placeholder="Alex" />
          <InputGroup label="PROFESSIONAL EMAIL" placeholder="alex.chen@university.edu" />
          <InputGroup label="US PHONE" placeholder="(206) 555-0123" />
          <InputGroup label="CURRENT BASE (CITY, ST)" placeholder="Seattle, WA" />
        </div>

        <button className="mt-12 w-full py-5 bg-[#0f172a] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition">
          📥 EXPORT MASTER CV
        </button>
      </div>

      {/* 右侧审计面板 */}
      <div className="col-span-4 space-y-6">
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xs font-black tracking-widest text-slate-400">FAANG PROTOCOL AUDIT</h3>
            <span className="text-slate-300">🛡️</span>
          </div>

          <div className="space-y-6">
            <AuditItem label="Auth Email Format" status="VERIFIED" color="text-emerald-500" />
            <AuditItem label="US Location Syntax" status="VERIFIED" color="text-emerald-500" />
            <AuditItem label="Quantified Impacts (3+)" status="ACTION REQUIRED" color="text-slate-300" />
            <AuditItem label="Action Verb Priority" status="VERIFIED" color="text-emerald-500" />
            <AuditItem label="Technical Density (10+)" status="VERIFIED" color="text-emerald-500" />
          </div>

          <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
            <div className="text-xs font-bold text-emerald-500">80% MATCHED</div>
            <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center font-black text-xs">80</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 辅助组件
function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 tracking-wider">{label}</label>
      <input className="w-full bg-[#f8faff] border-none rounded-2xl p-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-indigo-500 transition" placeholder={placeholder} />
    </div>
  );
}

function AuditItem({ label, status, color }: { label: string, status: string, color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-lg ${color.includes('emerald') ? 'bg-emerald-50' : 'bg-slate-50'} flex items-center justify-center text-xs`}>
        {color.includes('emerald') ? '✓' : '○'}
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-slate-700">{label}</p>
        <p className={`text-[10px] font-black tracking-tighter ${color}`}>{status}</p>
      </div>
    </div>
  );
}
