"use client";

import React, { useMemo } from "react";
import { Card, Button, Typography, Tag } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Text } = Typography;

export default function TotalSalesCard() {
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
      {/* Top blue header */}
      <div className="relative overflow-hidden">
        <div className="bg-[#3557d6] px-6 py-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-2xl font-semibold text-white">30,569</div>
              <div className="mt-1 text-sm font-semibold text-white/90">
                Total Sales
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Tag
                className="!m-0 !border-0 !bg-white/90 !text-slate-900 !font-semibold"
              >
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
        </div>

        {/* wave mock */}
        <div className="h-32 bg-[#3557d6] relative">
          <svg
            viewBox="0 0 1440 160"
            className="absolute inset-x-0 bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C160,20 320,140 480,90 C640,40 800,120 960,80 C1120,40 1280,140 1440,90 L1440,160 L0,160 Z"
              fill="rgba(255,255,255,0.25)"
            />
          </svg>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-slate-100 bg-white">
        {items.map((it) => (
          <div key={it.key} className="flex items-center gap-4 px-6 py-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-slate-50">
              {/* তোমার কাছে যদি icon না থাকে, এই Image remove করে শুধু div রাখলেও চলবে */}
              <Image
                src={it.icon}
                alt={it.title}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-slate-900">
                {it.title}
              </div>
              <div className="text-xs text-slate-500">{it.cat}</div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-slate-900">{it.price}</div>
              <div className="text-xs text-slate-500">{it.sold}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-white px-6 py-4">
        <Button type="text" className="w-full font-semibold tracking-wide">
          FULL DETAILS
        </Button>
      </div>
    </Card>
  );
}
