"use client";

import React, { useMemo } from "react";
import { Card, Progress, Dropdown, Typography, Space } from "antd";
import {
  MoreOutlined,
  DollarOutlined,
  SwitcherOutlined,
  ToolOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export default function TopStatsCards() {
  const menuItems = useMemo(
    () => [
      { key: "1", label: "View Details" },
      { key: "2", label: "Download Report" },
      { key: "3", label: "Remove" },
    ],
    []
  );

  const cards = useMemo(
    () => [
      {
        key: "invoices",
        icon: <DollarOutlined className="text-slate-600" />,
        value: "45/76",
        title: "Invoices Awaiting Payment",
        metricLabel: "Invoices Awaiting Payment",
        rightText: "$5,569 (56%)",
        percent: 56,
        color: "#3b82f6", // blue
      },
      {
        key: "leads",
        icon: <SwitcherOutlined className="text-slate-600" />,
        value: "48/86",
        title: "Converted Leads",
        metricLabel: "Converted Leads",
        rightText: "52 Completed (63%)",
        percent: 63,
        color: "#f59e0b", // orange
      },
      {
        key: "projects",
        icon: <ToolOutlined className="text-slate-600" />,
        value: "16/20",
        title: "Projects In Progress",
        metricLabel: "Projects In Progress",
        rightText: "16 Completed (78%)",
        percent: 78,
        color: "#22c55e", // green
      },
      {
        key: "conversion",
        icon: <LineChartOutlined className="text-slate-600" />,
        value: "46.59%",
        title: "Conversion Rate",
        metricLabel: "Conversion Rate",
        rightText: "$2,254 (46%)",
        percent: 46,
        color: "#ef4444", // red
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((c) => (
        <Card
          key={c.key}
          className="rounded-2xl border border-slate-100 shadow-sm"
          styles={{ body: { padding: 18 } }}
        >
          {/* top row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-100">
                {c.icon}
              </div>

              <div className="min-w-0">
                <div className="text-2xl font-semibold text-slate-900 leading-none">
                  {c.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-700">
                  {c.title}
                </div>
              </div>
            </div>

            <Dropdown
              menu={{ items: menuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="card menu"
              >
                <MoreOutlined />
              </button>
            </Dropdown>
          </div>

          {/* bottom */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <Text className="text-slate-500">{c.metricLabel}</Text>
              <Text className="text-slate-700">{c.rightText}</Text>
            </div>

            <div className="mt-2">
              <Progress
                percent={c.percent}
                showInfo={false}
                strokeColor={c.color}
                railColor="#eef2ff"
                size="small"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
