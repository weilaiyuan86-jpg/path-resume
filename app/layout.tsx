import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen">
          {/* 侧边栏 */}
          <aside className="w-64 bg-white border-r border-slate-100 flex flex-col p-6 fixed h-full">
            <div className="flex items-center gap-2 mb-10 px-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">🚀</div>
              <span className="font-black text-lg tracking-tight">CAREERBOOST</span>
            </div>
            
            <nav className="flex-1 space-y-2">
              {[
                { name: 'Console', icon: '🧭', path: '/builder' },
                { name: 'Resume Builder', icon: '📄', path: '/builder/editor' },
                { name: 'SmartMatch™', icon: '⚡', path: '/builder/match' },
                { name: 'Library', icon: '📚', path: '/builder/library' },
                { name: 'US Visa Hub', icon: '🛡️', path: '/builder/visa' },
              ].map((item) => (
                <a key={item.name} href={item.path} className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl font-medium transition-all text-sm">
                  <span>{item.icon}</span> {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-xs">AC</div>
              <div className="text-xs">
                <p className="font-bold">Alex Chen</p>
                <p className="text-slate-400">MASTER USER</p>
              </div>
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="flex-1 ml-64 p-10 bg-[#fbfcfe]">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
