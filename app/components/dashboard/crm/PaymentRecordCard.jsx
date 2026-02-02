"use client";

import React, { useMemo } from "react";
import { Card, Dropdown, Typography, Progress } from "antd";
import { MoreOutlined, InfoCircleOutlined } from "@ant-design/icons";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const { Text } = Typography;

function formatK(value) {
  const n = Number(value || 0);
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return `${n}`;
}

export default function PaymentRecordCard() {
  const menuItems = useMemo(
    () => [
      { key: "1", label: "View details" },
      { key: "2", label: "Download" },
      { key: "3", label: "Remove" },
    ],
    []
  );

  const data = useMemo(
    () => [
      { month: "JAN/23", bg: 44000, pay: 22000, line: 44000 },
      { month: "FEB/23", bg: 55000, pay: 10000, line: 55000 },
      { month: "MAR/23", bg: 40000, pay: 21000, line: 41000 },
      { month: "APR/23", bg: 66000, pay: 26000, line: 67000 },
      { month: "MAY/23", bg: 22000, pay: 12000, line: 23000 },
      { month: "JUN/23", bg: 43000, pay: 21000, line: 44000 },
      { month: "JUL/23", bg: 20000, pay: 36000, line: 21000 },
      { month: "AUG/23", bg: 40000, pay: 20000, line: 41000 },
      { month: "SEP/23", bg: 56000, pay: 44000, line: 57000 },
      { month: "OCT/23", bg: 27000, pay: 21000, line: 28000 },
      { month: "NOV/23", bg: 42000, pay: 30000, line: 43000 },
      { month: "DEC/23", bg: 55000, pay: 20000, line: 40000 },
    ],
    []
  );

  const mini = useMemo(
    () => [
      { title: "Awaiting", value: "$5,486", percent: 55, color: "#3b82f6" },
      { title: "Completed", value: "$9,275", percent: 72, color: "#22c55e" },
      { title: "Rejected", value: "$3,868", percent: 42, color: "#ef4444" },
      { title: "Revenue", value: "$50,668", percent: 68, color: "#0f172a" },
    ],
    []
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">
            Payment Record
          </div>

          <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <button
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="menu"
            >
              <MoreOutlined />
            </button>
          </Dropdown>
        </div>
      }
    >
      <div className="border-t border-slate-100">
        <div className="px-6 pt-4">
          <div className="flex justify-end">
            <span className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100">
              <InfoCircleOutlined />
            </span>
          </div>
        </div>

        <div className="px-4 pb-2">
          <div className="h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data} barCategoryGap={22}>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  tickFormatter={(v) => formatK(v)}
                />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.12)" }}
                  formatter={(v, name) => {
                    const label =
                      name === "pay"
                        ? "Payments"
                        : name === "bg"
                        ? "Background"
                        : "Trend";
                    return [`${Number(v).toLocaleString()}`, label];
                  }}
                />

                <Bar
                  dataKey="bg"
                  fill="#e5e7eb"
                  radius={[10, 10, 10, 10]}
                  maxBarSize={22}
                />
                <Bar
                  dataKey="pay"
                  fill="#3b82f6"
                  radius={[10, 10, 10, 10]}
                  maxBarSize={16}
                />
                <Line
                  type="monotone"
                  dataKey="line"
                  stroke="#cbd5e1"
                  strokeWidth={2}
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-6 pb-6 sm:grid-cols-2 lg:grid-cols-4">
          {mini.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-slate-100 bg-white p-4"
            >
              <Text className="text-slate-500">{m.title}</Text>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                {m.value}
              </div>
              <div className="mt-3">
                <Progress
                  percent={m.percent}
                  showInfo={false}
                  strokeColor={m.color}
                  railColor="#eef2ff"
                  size="small"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
