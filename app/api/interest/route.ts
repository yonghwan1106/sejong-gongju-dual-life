import { NextResponse } from 'next/server';

// In-memory counter — resets on cold start.
// When Vercel KV is provisioned, replace with @vercel/kv calls.
let memoryCount = 0;

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedEmail = typeof email === 'string' ? email.trim() : '';

    if (!normalizedName || !normalizedEmail) {
      return NextResponse.json({ ok: false, error: 'name and email required' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 });
    }
    // PII is intentionally not logged or stored server-side in this demo.
    memoryCount += 1;
    return NextResponse.json({ ok: true, count: memoryCount });
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ count: memoryCount });
}
