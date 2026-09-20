"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BarChartProps {
  data: any[]
  title?: string
  dataKey?: string
  xAxisKey?: string
  color?: string
}

export default function CustomBarChart({ data, title, dataKey = "value", xAxisKey = "name", color = "#3b82f6" }: BarChartProps) {
  return (
    <div className="w-full h-full">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey={xAxisKey} tick={{ fill: "#64748b", fontSize: 12 }} />
          <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
