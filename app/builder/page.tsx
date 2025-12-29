import React from 'react';

export default function BuilderPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左侧：Identity Matrix */}
        <div className="border p-6 rounded-lg bg-white shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Identity Matrix</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Given Name</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Professional Email</label>
              <input type="email" className="w-full border p-2 rounded" placeholder="email@example.com" />
            </div>
          </div>
        </div>

        {/* 右侧：Audit Panel */}
        <div className="border p-6 rounded-lg bg-gray-50 shadow">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">FAANG Protocol Audit</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-green-600">
              <span>✓ Auth Email Format</span>
              <span>Passed</span>
            </div>
            <div className="flex justify-between text-orange-600">
              <span>! US Location Syntax</span>
              <span>Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}