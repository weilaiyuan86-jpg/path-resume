'use client';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// 1. 定义侧边栏组件
function Sidebar() {
  const { dict } = useLanguage();
  const pathname = usePathname();

  const menuItems = [
    { name: dict.console || 'Console', icon: '🧭', path: '/builder' },
    { name: dict.smartMatch || 'SmartMatch™', icon: '⚡', path: '/builder/match' },
    { name: dict.visa || 'US Visa Hub', icon: '🛡️', path: '/visa' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col p-6 fixed h-full z-20">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">🚀</div>
        <span className="font-black text-lg tracking-tight">CAREERBOOST</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <span>{item.icon}</span> {item.name}
            </Link>
          );
        })}
      </nav>
      {/* 底部用户信息栏 */}
      <div className="mt-auto p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">AC</div>
        <div className="text-[10px]">
          <p className="font-bold text-slate-900 uppercase">Alex Chen</p>
          <p className="text-slate-400 font-black tracking-widest uppercase">Master User</p>
        </div>
      </div>
    </aside>
  );
}

// 2. 主布局
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <LanguageProvider> 
        <html lang="en">
          <body className="antialiased bg-[#f8faff] flex">
            {/* 注入侧边栏 */}
            <Sidebar />
            {/* 内容区域，添加 ml-64 给侧边栏留出空间 */}
            <main className="flex-1 ml-64 min-h-screen">
              {children}
            </main>
          </body>
        </html>
      </LanguageProvider>
    </ClerkProvider>
  );
}