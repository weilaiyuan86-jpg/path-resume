import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { LanguageProvider } from '@/context/LanguageContext'; // 引入刚才创建的 Provider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <LanguageProvider> 
        <html lang="en">
          <body className="antialiased bg-[#f8faff]">
            {/* 这里包裹后，所有的子页面 children 都能通过 useLanguage() 获取当前语言 */}
            {children}
          </body>
        </html>
      </LanguageProvider>
    </ClerkProvider>
  );
}