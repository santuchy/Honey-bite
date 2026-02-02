"use client";

import React, { useMemo } from "react";
import { Card, Typography } from "antd";
import {
  StarOutlined,
  FileTextOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const { Text } = Typography;

function MiniStatCard({
  title,
  subtitle,
  rightValue,
  percentText,
  percentColor,
  lineColor,
  fillColor,
  icon,
  data,
  tooltipLabel,
}) {
  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
     styles={{ body: { padding: 0 } }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-6 py-5">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600">
            {icon}
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
          </div>
        </div>

        <div className="text-2xl font-semibold text-slate-900">{rightValue}</div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-slate-100" />

      {/* Body */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Chart */}
          <div className="h-[92px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 6, right: 8, left: 0, bottom: 0 }}>
                <Tooltip
                  cursor={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                    padding: 10,
                  }}
                  formatter={(v) => [`${v}`, tooltipLabel]}
                  labelFormatter={(l) => `${l}`}
                />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={lineColor}
                  strokeWidth={2.5}
                  fill={fillColor}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Percent text */}
          <div className="w-[120px] text-right">
            <div className="text-xs font-semibold" style={{ color: percentColor }}>
              {percentText}
            </div>
            <Text className="text-xs text-slate-500">from last week</Text>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function TaskMiniCards() {
  const cards = useMemo(() => {
    return [
      {
        title: "Tasks Completed",
        subtitle: "22/35 completed",
        rightValue: "22/35",
        percentText: "28% more",
        percentColor: "#3b82f6",
        lineColor: "#3b82f6",
        fillColor: "rgba(59,130,246,0.18)",
        icon: <StarOutlined />,
        tooltipLabel: "Tasks Completed",
        data: [
          { name: "MON", v: 12 },
          { name: "TUE", v: 16 },
          { name: "WED", v: 14 },
          { name: "THU", v: 18 },
          { name: "FRI", v: 15 },
          { name: "SAT", v: 22 },
          { name: "SUN", v: 16 },
        ],
      },
      {
        title: "New Tasks",
        subtitle: "5/20 completed",
        rightValue: "5/20",
        percentText: "34% more",
        percentColor: "#22c55e",
        lineColor: "#22c55e",
        fillColor: "rgba(34,197,94,0.16)",
        icon: <FileTextOutlined />,
        tooltipLabel: "New Tasks",
        data: [
          { name: "MON", v: 8 },
          { name: "TUE", v: 14 },
          { name: "WED", v: 7 },
          { name: "THU", v: 16 },
          { name: "FRI", v: 12 },
          { name: "SAT", v: 20 },
          { name: "SUN", v: 13 },
        ],
      },
      {
        title: "Project Done",
        subtitle: "20/30 completed",
        rightValue: "20/30",
        percentText: "42% more",
        percentColor: "#ef4444",
        lineColor: "#ef4444",
        fillColor: "rgba(239,68,68,0.14)",
        icon: <AppstoreOutlined />,
        tooltipLabel: "Project Done",
        data: [
          { name: "MON", v: 10 },
          { name: "TUE", v: 15 },
          { name: "WED", v: 9 },
          { name: "THU", v: 18 },
          { name: "FRI", v: 14 },
          { name: "SAT", v: 21 },
          { name: "SUN", v: 12 },
        ],
      },
    ];
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {cards.map((c) => (
        <MiniStatCard key={c.title} {...c} />
      ))}
    </div>
  );
}
