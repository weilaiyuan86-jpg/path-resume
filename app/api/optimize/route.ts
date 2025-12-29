import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text, type, jd } = await req.json();

    // 1. 如果是 SmartMatch (JD 匹配分析)
    if (type === 'MATCH') {
      const matchResponse = await openai.chat.completions.create({
        model: "gpt-4o", // 使用 GPT-4o 保证分析精度
        messages: [
          {
            role: "system",
            content: "You are a professional ATS (Applicant Tracking System). Analyze the match between the resume content and the Job Description. Return a JSON object with: 1. score (0-100), 2. missingKeywords (array), 3. feedback (brief advice)."
          },
          {
            role: "user",
            content: `Resume Content: ${text}\n\nJob Description: ${jd}`
          }
        ],
        response_format: { type: "json_object" }
      });

      return NextResponse.json(JSON.parse(matchResponse.choices[0].message.content || "{}"));
    }

    // 2. 如果是 Resume Polish (描述润色)
    const polishResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an expert US Tech Career Coach. Your goal is to rewrite resume bullet points using the Google XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z]'. 
          Requirements:
          - Use strong Action Verbs (e.g., Spearheaded, Orchestrated).
          - Quantify results (e.g., %, $, time saved).
          - Keep it professional, concise, and ATS-friendly.
          - Output ONLY the polished bullet points.`
        },
        {
          role: "user",
          content: `Rewrite this work experience: ${text}`
        }
      ],
      temperature: 0.7,
    });

    const result = polishResponse.choices[0].message.content;
    return NextResponse.json({ result });

  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json({ error: "AI service failed. Check API Key or balance." }, { status: 500 });
  }
}