"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb, Button, DatePicker, Space, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Text } = Typography;

function titleCase(str = "") {
  return str
    .replace(/-/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function SubHeaderBar({ onFilterClick }) {
  const pathname = usePathname();
  const [range, setRange] = useState(null);

  const crumbs = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean); // ["dashboard","crm"]
    const dashIndex = parts.indexOf("dashboard");
    const afterDashboard = dashIndex >= 0 ? parts.slice(dashIndex + 1) : [];
    const pageTitle = afterDashboard[0] ? titleCase(afterDashboard[0]) : "Dashboard";

    return {
      pageTitle,
      items: [
        { title: <Link href="/dashboard">Home</Link> },
        { title: <Text type="secondary">{pageTitle}</Text> },
      ],
    };
  }, [pathname]);

  return (
    <div className="w-full border-b border-slate-100 bg-white">
      {/* ✅ FULL WIDTH bar (no mx-auto / no max-w) */}
      <div className="flex w-full items-center justify-between gap-3 px-6 py-3">
        {/* Left */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold text-slate-900">
              {crumbs.pageTitle}
            </div>
            <span className="text-slate-300">|</span>
            <Breadcrumb items={crumbs.items} separator=">" className="text-xs" />
          </div>
        </div>

        {/* Right */}
        <Space size={10} wrap>
          <DatePicker.RangePicker
            value={range}
            onChange={(val) => setRange(val)}
            size="middle"
            placeholder={["FEB 01,26", "FEB 28,26"]}
            className="rounded-lg"
          />

          <Button
            icon={<FilterOutlined />}
            onClick={onFilterClick}
            className="rounded-lg font-semibold"
          >
            FILTER
          </Button>
        </Space>
      </div>
    </div>
  );
}
