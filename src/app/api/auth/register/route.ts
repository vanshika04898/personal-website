import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password, institution } = body

    // Demo registration - in production, use proper auth with bcrypt/NextAuth
    // Validate input
    if (!name || !email || !password || !institution) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        id: Date.now().toString(),
        name,
        email,
        institution,
      },
      token: 'demo-token-' + Date.now()
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
