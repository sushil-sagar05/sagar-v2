import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    // Load your bio.json file dynamically
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'bio.json'), 'utf8');
    const bioData = JSON.parse(fileContents);

    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash", // Corrected property name
      apiKey: process.env.GOOGLE_API_KEY, 
      temperature: 0.2, 
      maxOutputTokens: 2048,
    });

    const systemPrompt = `
      You are "Sagar AI", representing Sushil Sagar.
      Use this data to answer: ${JSON.stringify(bioData)}.
      Focus on his projects: Nyaynetra, Math Agent, MovieMeter, and Complaint Hub.
    `;

    const langChainMessages = [
      new SystemMessage(systemPrompt),
      ...messages.map((m: any) => 
        m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
      )
    ];

    const response = await model.stream(langChainMessages);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          // In GoogleGenAI, chunk.content is a string
          controller.enqueue(encoder.encode(chunk.content as string));
        }
        controller.close();
      },
    });

    return new NextResponse(stream);
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: "Check your API key or bio.json path" }, { status: 500 });
  }
}