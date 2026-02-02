"use client";

import React, { useMemo } from "react";
import { Card, Dropdown, Typography, Progress } from "antd";
import { MoreOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { DualAxes } from "@ant-design/plots";

const { Text } = Typography;

export default function PaymentRecordCard() {
  const menuItems = useMemo(
    () => [
      { key: "1", label: "View details" },
      { key: "2", label: "Download" },
      { key: "3", label: "Remove" },
    ],
    []
  );

  const chartData = useMemo(() => {
    // demo-like months
    const months = [
      "JAN/23","FEB/23","MAR/23","APR/23","MAY/23","JUN/23",
      "JUL/23","AUG/23","SEP/23","OCT/23","NOV/23","DEC/23",
    ];

    // light grey bars (background volume)
    const grey = [42, 55, 40, 66, 22, 43, 20, 40, 56, 27, 42, 55].map((v, i) => ({
      month: months[i],
      type: "Background",
      value: v * 1000,
    }));

    // blue bars (primary)
    const blue = [22, 10, 21, 26, 12, 21, 36, 20, 44, 21, 30, 20].map((v, i) => ({
      month: months[i],
      type: "Payments",
      value: v * 1000,
    }));

    // line data (smooth wave)
    const line = [44, 56, 41, 67, 23, 44, 21, 41, 57, 28, 43, 40].map((v, i) => ({
      month: months[i],
      value: v * 1000,
    }));

    return { bars: [...grey, ...blue], line };
  }, []);

  const config = useMemo(() => {
    return {
      data: [chartData.bars, chartData.line],
      xField: "month",
      yField: ["value", "value"],
      geometryOptions: [
        {
          geometry: "column",
          isGroup: true,
          seriesField: "type",
          columnWidthRatio: 0.35,
          marginRatio: 0.1,
          // colors for grouped bars
          color: ({ type }) => (type === "Payments" ? "#3b82f6" : "#e5e7eb"),
          label: false,
        },
        {
          geometry: "line",
          smooth: true,
          color: "#cbd5e1",
          lineStyle: { lineWidth: 2, opacity: 0.9 },
          point: false,
        },
      ],
      legend: false,
      tooltip: { shared: true },
      xAxis: {
        tickLine: false,
        line: false,
        label: { style: { fill: "#94a3b8", fontSize: 11 } },
      },
      yAxis: {
        value: {
          grid: { line: { style: { stroke: "#eef2f7" } } },
          label: {
            formatter: (v) => `${Math.round(Number(v) / 1000)}K`,
            style: { fill: "#94a3b8", fontSize: 11 },
          },
        },
      },
      padding: [16, 18, 0, 10],
      height: 360,
    };
  }, [chartData]);

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
          <div className="text-base font-semibold text-slate-900">Payment Record</div>
          <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
            <button
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="menu"
            >
              <MoreOutlined />
            </button>
          </Dropdown>
        </div>
      }
      extra={null}
    >
      <div className="border-t border-slate-100">
        <div className="px-6 pt-4">
          {/* tiny info icon top-right area like demo */}
          <div className="flex justify-end">
            <span className="grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100">
              <InfoCircleOutlined />
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="px-3 pb-2">
          <DualAxes {...config} />
        </div>

        {/* Bottom mini cards */}
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
