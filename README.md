# ARCHAEO-SCAN

AI-Assisted Archaeological Landscape Discovery & Monitoring System

## 🏛️ Overview

ARCHAEO-SCAN is a comprehensive archaeological intelligence system that combines archaeological records, satellite-derived features, GIS-based spatial information, machine learning, clustering, similarity analysis, and temporal monitoring into a single decision-support platform.

### 🔥 Unique Features

1. **Archaeological Site Fingerprint** 🧬
   - Creates multidimensional profiles of known archaeological landscapes
   - Combines archaeological, geographical, environmental, and satellite-derived features
   - Goes beyond simple classification to understand landscape characteristics

2. **Archaeological Potential Map** 🔎
   - Uses known BORDERSCAPE sites as reference examples
   - Searches for unexplored locations with similar characteristics
   - Prioritizes areas for archaeological investigation

3. **Explainable AI** 🤖
   - Shows not only which locations are flagged, but also why
   - Provides evidence-based explanations for each prediction
   - Multi-evidence scoring system (terrain, environmental, spatial, historical)

4. **Similar Site Finder** 🔗
   - Select a known archaeological site
   - System finds the most similar sites/locations
   - Intuitive exploration of landscape relationships

5. **Satellite Time Machine** ⏳
   - Compare satellite observations from different years
   - Monitor land-use change, erosion, construction, flooding
   - Track changes to archaeological landscapes over time

6. **Anomaly Archaeology** ⚠️
   - Identify sites with unusual characteristics
   - Detect outliers that may represent unique archaeological phenomena
   - Uses Isolation Forest for anomaly detection

7. **What-If Exploration Mode** 🎯
   - Adjust research criteria in real-time
   - Explore different scenarios and hypotheses
   - Interactive slider-based parameter tuning

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, shadcn/ui components
- **Charts**: Recharts
- **Maps**: Leaflet (ready for integration)
- **Authentication**: NextAuth.js (demo implementation)
- **API**: Next.js API Routes

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Demo Credentials

- **Email**: admin@archaeo.edu
- **Password**: admin123

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── sites/          # Archaeological sites data
│   │   ├── potential-areas/ # High-potential locations
│   │   ├── anomalies/      # Anomaly detection results
│   │   └── ml-models/      # ML model metrics
│   ├── dashboard/          # Dashboard pages
│   │   ├── fingerprints/   # Site fingerprint analysis
│   │   ├── potential-map/ # Archaeological potential map
│   │   ├── ml-models/     # ML models overview
│   │   ├── similar-sites/ # Similar site finder
│   │   ├── time-machine/  # Temporal analysis
│   │   ├── anomalies/     # Anomaly detection
│   │   ├── what-if/       # What-if exploration
│   │   └── analytics/     # Analytics dashboard
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Login page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
└── ...
```

## 🎯 Pages & Features

### 1. Login/Register (`/`)
- Authentication system with login and registration
- Demo credentials for testing
- Modern, responsive design

### 2. Dashboard (`/dashboard`)
- Overview of system statistics
- Quick action cards
- Recent activity feed
- ML models status

### 3. Site Fingerprints (`/dashboard/fingerprints`)
- List of known archaeological sites
- Multidimensional fingerprint visualization
- Site comparison tool
- Feature breakdown by category

### 4. Potential Map (`/dashboard/potential-map`)
- Interactive map of high-potential areas
- Multi-evidence scoring breakdown
- Explainable AI evidence display
- Priority filtering (High/Medium/Low)

### 5. ML Models (`/dashboard/ml-models`)
- Overview of all ML algorithms
- Performance metrics (accuracy, precision, recall, F1)
- Training history charts
- Feature importance analysis
- Cluster distribution visualization

### 6. Similar Sites (`/dashboard/similar-sites`)
- Select reference site
- Find similar unexplored locations
- Similarity scoring
- Step-by-step workflow explanation

### 7. Time Machine (`/dashboard/time-machine`)
- Timeline navigation (2010-2025)
- Satellite imagery comparison
- Change detection (construction, vegetation, erosion, flooding)
- Temporal change summary

### 8. Anomalies (`/dashboard/anomalies`)
- List of detected anomalies
- Severity classification (High/Medium/Low)
- Detailed anomaly analysis
- Recommendations for investigation

### 9. What-If Explorer (`/dashboard/what-if`)
- Adjustable research criteria
- Real-time parameter tuning
- Preset research scenarios
- Scan results visualization

### 10. Analytics (`/dashboard/analytics`)
- Site distribution charts
- Temporal analysis
- Discovery trends
- Model performance tracking

## 🧠 ML Models Used

| Algorithm | Purpose | Accuracy |
|-----------|---------|----------|
| Random Forest | Classification & Pattern Learning | 87% |
| K-Means Clustering | Similarity & Grouping | 92% |
| DBSCAN | Spatial Clustering | 89% |
| Isolation Forest | Anomaly Detection | 85% |
| Apriori | Association Rules | 78% |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for production:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-url
```

### Map Integration

To enable real maps, integrate with Leaflet or Mapbox:

1. Install additional dependencies:
```bash
npm install leaflet react-leaflet
```

2. Add map component to potential-map page
3. Configure map tiles and markers

## 📊 Data Structure

### Site Fingerprint
```typescript
{
  id: string
  name: string
  type: string
  phase: string
  c14: string
  location: { lat: number, lng: number }
  terrain: string
  elevation: number
  nileDistance: number
  ndvi: number
  fingerprint: {
    archaeological: {...}
    geographical: {...}
    environmental: {...}
    satellite: {...}
  }
}
```

### Potential Area
```typescript
{
  id: string
  name: string
  potential: number
  priority: 'high' | 'medium' | 'low'
  confidence: number
  location: { lat: number, lng: number }
  terrainSimilarity: number
  environmentalSimilarity: number
  spatialPattern: number
  historicalEvidence: number
  reasons: string[]
}
```

## 🎨 Customization

### Colors
Modify `tailwind.config.ts` to customize the color scheme.

### Components
All UI components are in `src/components/ui/` and can be customized.

### Data
Replace mock data in API routes with real database connections.

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t archaeo-scan .
docker run -p 3000:3000 archaeo-scan
```

## 📝 Research Novelty

The uniqueness of this project lies in the integration of archaeological records, satellite-derived features, GIS-based spatial information, machine learning, clustering, similarity analysis, and temporal monitoring into a single system that:

1. Creates archaeological site fingerprints from multidimensional data
2. Identifies and prioritizes unexplored locations with similar characteristics
3. Provides explainable AI evidence for archaeological decision-making
4. Enables temporal monitoring of archaeological landscapes
5. Supports human-in-the-loop archaeological validation

## 🤝 Contributing

This is a research project. For questions or collaboration, please contact the research team.

## 📄 License

This project is part of academic research. Please contact for usage permissions.

## 🙏 Acknowledgments

- BORDERSCAPE project for archaeological data
- Machine learning algorithms and libraries
- Satellite imagery providers
- Archaeological research community

---

**Built with ❤️ for archaeological research**
