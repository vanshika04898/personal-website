import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data - in production, fetch from database or ML model metrics
    const models = [
      {
        name: "Random Forest",
        purpose: "Classification & Pattern Learning",
        status: "Active",
        accuracy: 87,
        precision: 85,
        recall: 89,
        f1: 87,
        description: "Learns relationships between archaeological and environmental features",
      },
      {
        name: "K-Means Clustering",
        purpose: "Similarity & Grouping",
        status: "Active",
        accuracy: 92,
        precision: 90,
        recall: 94,
        f1: 92,
        description: "Discovers groups of similar site and landscape profiles",
      },
      {
        name: "DBSCAN",
        purpose: "Spatial Clustering",
        status: "Active",
        accuracy: 89,
        precision: 88,
        recall: 90,
        f1: 89,
        description: "Identifies spatial concentrations of archaeological sites",
      },
      {
        name: "Isolation Forest",
        purpose: "Anomaly Detection",
        status: "Active",
        accuracy: 85,
        precision: 83,
        recall: 87,
        f1: 85,
        description: "Detects unusual archaeological and landscape profiles",
      },
      {
        name: "Apriori",
        purpose: "Association Rules",
        status: "Active",
        accuracy: 78,
        precision: 75,
        recall: 80,
        f1: 77,
        description: "Finds recurring combinations of archaeological characteristics",
      },
    ]

    return NextResponse.json({ success: true, models })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ML models' },
      { status: 500 }
    )
  }
}
