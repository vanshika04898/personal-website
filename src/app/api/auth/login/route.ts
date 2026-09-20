import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Demo authentication - in production, use proper auth with bcrypt/NextAuth
    if (email === 'admin@archaeo.edu' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        user: {
          id: '1',
          name: 'Dr. Researcher',
          email: email,
          institution: 'University',
        },
        token: 'demo-token-12345'
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
