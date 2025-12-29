import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold text-blue-600">CAREERBOOST™</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
        </div>
      </nav>

      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">Master Your Career Path</h2>
        <p className="text-gray-600 mb-8 text-xl">FAANG Protocol Audit & AI Resume Intelligence</p>
        <Link href="/builder">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
            Start Building Now →
          </button>
        </Link>
      </div>
    </main>
  );
}