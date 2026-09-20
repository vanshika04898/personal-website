import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Mock data - in production, fetch from database
    const site = {
      id: id,
      name: "Nile Valley Settlement",
      type: "Settlement",
      phase: "Predynastic",
      c14: "3200-3100 BCE",
      location: { lat: 25.7, lng: 32.6 },
      terrain: "River Valley",
      elevation: 85,
      nileDistance: 0.5,
      ndvi: 0.72,
      fingerprint: {
        archaeological: {
          siteType: "Settlement",
          historicalPhase: "Predynastic",
          c14Range: "3200-3100 BCE",
        },
        geographical: {
          terrainType: "River Valley",
          elevation: "85m",
          slope: "2.3°",
        },
        environmental: {
          nileDistance: "0.5km",
          waterAccess: "Direct",
        },
        satellite: {
          ndvi: "0.72",
          landCover: "Vegetated",
          surfaceTemp: "28°C",
        },
      },
    }

    return NextResponse.json({ success: true, site })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch site' },
      { status: 500 }
    )
  }
}
