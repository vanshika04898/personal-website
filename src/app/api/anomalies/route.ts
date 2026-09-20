import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data - in production, fetch from database
    const anomalies = [
      {
        id: "ANOM-001",
        siteId: "BORDER-017",
        siteName: "Remote Desert Outpost",
        anomalyType: "Terrain",
        description: "Unusual terrain characteristics compared to typical desert sites",
        severity: "high",
        score: 0.92,
        features: {
          elevation: "Unusually high",
          slope: "Atypical gradient",
          composition: "Rare mineral deposits",
        },
        recommendation: "Investigate potential unique geological or archaeological significance",
      },
      {
        id: "ANOM-002",
        siteId: "BORDER-083",
        siteName: "Isolated River Settlement",
        anomalyType: "Spatial",
        description: "Unusual spatial position relative to other known sites",
        severity: "medium",
        score: 0.78,
        features: {
          isolation: "Far from cluster centers",
          orientation: "Non-standard alignment",
          proximity: "Unusual distance to water",
        },
        recommendation: "May represent a different settlement pattern or function",
      },
      {
        id: "ANOM-003",
        siteId: "BORDER-121",
        siteName: "Highland Temple Complex",
        anomalyType: "Environmental",
        description: "Unusual environmental characteristics for this site type",
        severity: "high",
        score: 0.85,
        features: {
          climate: "Atypical microclimate",
          vegetation: "Unusual plant species",
          hydrology: "Unique water access pattern",
        },
        recommendation: "Could indicate specialized religious or ceremonial function",
      },
    ]

    return NextResponse.json({ success: true, anomalies })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch anomalies' },
      { status: 500 }
    )
  }
}
