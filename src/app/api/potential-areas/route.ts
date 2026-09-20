import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data - in production, fetch from database
    const potentialAreas = [
      {
        id: "AREA-001",
        name: "Sector 7 - Eastern Ridge",
        potential: 91,
        priority: "high",
        confidence: 87,
        location: { lat: 26.1, lng: 33.2 },
        terrainSimilarity: 94,
        environmentalSimilarity: 88,
        spatialPattern: 92,
        historicalEvidence: 85,
        reasons: [
          "Similar terrain to 14 known sites",
          "Similar distance to Nile",
          "Located inside high-density spatial zone",
          "Similar environmental characteristics",
        ],
      },
      {
        id: "AREA-002",
        name: "Sector 12 - Oasis Edge",
        potential: 78,
        priority: "medium",
        confidence: 72,
        location: { lat: 25.3, lng: 32.8 },
        terrainSimilarity: 81,
        environmentalSimilarity: 79,
        spatialPattern: 75,
        historicalEvidence: 70,
        reasons: [
          "Moderate terrain similarity",
          "Proximity to water source",
          "Historical settlement patterns",
        ],
      },
      {
        id: "AREA-003",
        name: "Sector 19 - Desert Corridor",
        potential: 43,
        priority: "low",
        confidence: 65,
        location: { lat: 27.2, lng: 34.1 },
        terrainSimilarity: 55,
        environmentalSimilarity: 48,
        spatialPattern: 42,
        historicalEvidence: 38,
        reasons: [
          "Limited environmental similarity",
          "Low historical evidence",
          "Remote location",
        ],
      },
    ]

    return NextResponse.json({ success: true, potentialAreas })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch potential areas' },
      { status: 500 }
    )
  }
}
