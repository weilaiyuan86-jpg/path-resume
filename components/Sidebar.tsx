import { LayoutDashboard, FileText, Zap, BookOpen, ShieldCheck } from "lucide-react";

const menuItems = [
  { id: 'console', icon: <LayoutDashboard size={20} />, label: 'Console' },
  { id: 'builder', icon: <FileText size={20} />, label: 'Resume Builder' },
  { id: 'smartmatch', icon: <Zap size={20} />, label: 'SmartMatch™' },
  { id: 'library', icon: <BookOpen size={20} />, label: 'Library' },
  { id: 'visahub', icon: <ShieldCheck size={20} />, label: 'US Visa Hub' },
];

export default function Sidebar() {
  return (
    <div className="w-64 border-r bg-white h-screen flex flex-col p-6 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">🚀</div>
        <span className="font-black text-xl tracking-tighter">CAREERBOOST</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button key={item.id} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all font-bold text-sm">
            {item.icon} {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs border">AC</div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-slate-900">Alex Chen</span>
          <span className="text-[10px] text-indigo-600 font-black tracking-widest uppercase">Master User</span>
        </div>
      </div>
    </div>
  );
}