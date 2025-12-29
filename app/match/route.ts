import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { jd } = await req.json();

  // 模拟 AI 向量化分析
  // 在实际生产环境下，我们会调用 OpenAI 的 Embedding 接口计算余弦相似度
  await new Promise(resolve => setTimeout(resolve, 2000));

  const techKeywords = ["React", "TypeScript", "Node.js", "AWS", "Kubernetes", "Distributed Systems", "GraphQL"];
  
  // 随机模拟缺失的关键词和得分
  const missing = techKeywords.filter(() => Math.random() > 0.6);
  const score = Math.floor(Math.random() * 20) + 75; // 75-95 分

  return NextResponse.json({
    score,
    missing,
    status: "SUCCESS"
  });
}