import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data - in production, fetch from database
    const sites = [
      {
        id: "BORDER-001",
        name: "Nile Valley Settlement",
        type: "Settlement",
        phase: "Predynastic",
        c14: "3200-3100 BCE",
        location: { lat: 25.7, lng: 32.6 },
        terrain: "River Valley",
        elevation: 85,
        nileDistance: 0.5,
        ndvi: 0.72,
        similarity: 92,
      },
      {
        id: "BORDER-002",
        name: "Desert Outpost",
        type: "Fortification",
        phase: "Middle Kingdom",
        c14: "2050-1800 BCE",
        location: { lat: 26.2, lng: 33.1 },
        terrain: "Desert Plateau",
        elevation: 320,
        nileDistance: 15.2,
        ndvi: 0.18,
        similarity: 87,
      },
      {
        id: "BORDER-003",
        name: "Oasis Temple Complex",
        type: "Religious",
        phase: "New Kingdom",
        c14: "1550-1070 BCE",
        location: { lat: 24.8, lng: 31.9 },
        terrain: "Oasis",
        elevation: 120,
        nileDistance: 8.3,
        ndvi: 0.65,
        similarity: 95,
      },
      {
        id: "BORDER-004",
        name: "Agricultural Community",
        type: "Settlement",
        phase: "Ptolemaic",
        c14: "305-30 BCE",
        location: { lat: 25.4, lng: 32.2 },
        terrain: "Floodplain",
        elevation: 45,
        nileDistance: 0.8,
        ndvi: 0.81,
        similarity: 88,
      },
      {
        id: "BORDER-005",
        name: "Trade Route Station",
        type: "Commercial",
        phase: "Roman",
        c14: "30 BCE-395 CE",
        location: { lat: 26.8, lng: 33.5 },
        terrain: "Desert Corridor",
        elevation: 280,
        nileDistance: 22.1,
        ndvi: 0.12,
        similarity: 79,
      },
    ]

    return NextResponse.json({ success: true, sites })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sites' },
      { status: 500 }
    )
  }
}
