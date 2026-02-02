"use client";

import React, { useMemo } from "react";
import { Card, Button, Tag } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Image from "next/image";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function TotalSalesCard() {
  const chart = useMemo(
    () => [
      { x: "1", v: 32 },
      { x: "2", v: 20 },
      { x: "3", v: 26 },
      { x: "4", v: 18 },
      { x: "5", v: 28 },
      { x: "6", v: 14 },
      { x: "7", v: 25 },
    ],
    []
  );

  const items = useMemo(
    () => [
      {
        key: "shopify",
        title: "Shopify eCommerce Store",
        cat: "Electronics",
        price: "$1200",
        sold: "6 sold",
        icon: "/assets/shopify.png",
      },
      {
        key: "ios",
        title: "iOS Apps Development",
        cat: "Electronics",
        price: "$1450",
        sold: "3 sold",
        icon: "/assets/app-store.png",
      },
      {
        key: "figma",
        title: "Figma Dashboard Design",
        cat: "Electronics",
        price: "$1250",
        sold: "3 sold",
        icon: "/assets/figma.png",
      },
    ],
    []
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
     styles={{ body: { padding: 0 } }}
    >
      {/* top blue */}
      <div className="relative bg-[#3557d6]">
        <div className="flex items-start justify-between px-6 pt-6">
          <div>
            <div className="text-2xl font-semibold text-white">30,569</div>
            <div className="mt-1 text-sm font-semibold text-white/90">
              Total Sales
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="!m-0 !border-0 !bg-white/90 !text-slate-900 !font-semibold">
              12%
            </Tag>
            <button
              className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 text-white hover:bg-white/20"
              aria-label="settings"
            >
              <SettingOutlined />
            </button>
          </div>
        </div>

        {/* recharts wave */}
        <div className="h-44 w-full px-2 pb-2 pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart}>
              <Area
                type="monotone"
                dataKey="v"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={2}
                fill="rgba(255,255,255,0.20)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* list */}
      <div className="divide-y divide-slate-100 bg-white">
        {items.map((it) => (
          <div key={it.key} className="flex items-center gap-4 px-6 py-4">
            <div className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-slate-50">
              {/* icon থাকলে দেখাবে, না থাকলে fallback letter */}
              <Image
                src={it.icon}
                alt={it.title}
                width={48}
                height={48}
                className="object-contain p-2"
                onError={(e) => {
                  // next/image error handler not perfect in all cases,
                  // but fallback letter below will still show if image missing.
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="absolute text-lg font-bold text-slate-500">
                {it.fallback}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-slate-900">
                {it.title}
              </div>
              <div className="text-xs text-slate-500">{it.cat}</div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-slate-900">
                {it.price}
              </div>
              <div className="text-xs text-slate-500">{it.sold}</div>
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="border-t border-slate-100 bg-white px-6 py-4">
        <Button type="text" className="w-full font-semibold tracking-wide">
          FULL DETAILS
        </Button>
      </div>
    </Card>
  );
}
