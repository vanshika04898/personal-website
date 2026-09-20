"use client"

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts"

interface RadarChartProps {
  data: {
    subject: string
    value: number
    fullMark: number
  }[]
  title?: string
}

export default function CustomRadarChart({ data, title }: RadarChartProps) {
  return (
    <div className="w-full h-full">
      {title && <h3 className="text-sm font-semibold mb-4 text-center">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#64748b", fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 10 }} />
          <Radar
            name="Site Profile"
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
