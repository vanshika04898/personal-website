"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface LineChartProps {
  data: any[]
  title?: string
  lines?: {
    dataKey: string
    color: string
    name: string
  }[]
}

export default function CustomLineChart({ data, title, lines }: LineChartProps) {
  const defaultLines = [
    { dataKey: "value", color: "#3b82f6", name: "Value" },
  ]

  const chartLines = lines || defaultLines

  return (
    <div className="w-full h-full">
      {title && <h3 className="text-sm font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 12 }} />
          <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
          />
          <Legend />
          {chartLines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              strokeWidth={2}
              name={line.name}
              dot={{ fill: line.color }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
