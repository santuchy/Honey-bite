"use client";

import React, { useMemo } from "react";
import { Card, Typography, Progress, Avatar, Tag } from "antd";
import { MoreOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Text } = Typography;

/** small "traffic lights" like demo (red/yellow/green) */
function TrafficDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
      <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </div>
  );
}

function CardFooterButton({ label }) {
  return (
    <div className="border-t border-slate-100 px-6 py-4 text-center">
      <button className="text-xs font-semibold tracking-wider text-slate-900 hover:text-slate-700">
        {label.toUpperCase()}
      </button>
    </div>
  );
}

/** ---------- 1) Upcoming Schedule ---------- */
function UpcomingScheduleCard() {
  const schedules = useMemo(
    () => [
      {
        day: "20",
        mon: "DEC",
        color: "bg-emerald-50 text-emerald-600",
        title: "React Dashboard Design",
        time: "11:30am - 12:30pm",
        avatars: [
          "/assets/2.png",
          "/assets/3.png",
          "/assets/4.png",
          "/assets/6.png",
        ],
      },
      {
        day: "30",
        mon: "DEC",
        color: "bg-orange-50 text-orange-500",
        title: "Admin Design Concept",
        time: "10:00am - 12:00pm",
        avatars: [
          "/assets/3.png",
          "/assets/4.png",
          "/assets/7.png",
          "/assets/2.png",
        ],
      },
      {
        day: "17",
        mon: "DEC",
        color: "bg-indigo-50 text-indigo-600",
        title: "Standup Team Meeting",
        time: "8:00am - 9:00am",
        avatars: [
          "/assets/4.png",
          "/assets/6.png",
          "/assets/2.png",
          "/assets/7.png",
        ],
      },
      {
        day: "25",
        mon: "DEC",
        color: "bg-rose-50 text-rose-600",
        title: "Zoom Team Meeting",
        time: "03:30pm - 05:30pm",
        avatars: [
          "/assets/6.png",
          "/assets/7.png",
          "/assets/3.png",
          "/assets/4.png",
        ],
      },
    ],
    [],
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">
            Upcoming Schedule
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <TrafficDots />
            <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-slate-100">
              <InfoCircleOutlined />
            </button>
          </div>
        </div>
      }
    >
      <div className="border-t border-slate-100 px-6 py-6">
        <div className="space-y-4">
          {schedules.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-dashed border-slate-200 bg-white p-4"
            >
              <div className="flex items-center gap-4">
                {/* date pill */}
                <div className={`w-16 rounded-2xl p-3 text-center ${s.color}`}>
                  <div className="text-xl font-bold leading-none">{s.day}</div>
                  <div className="text-[10px] font-semibold tracking-wider">
                    {s.mon}
                  </div>
                </div>

                {/* text */}
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-slate-900">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{s.time}</div>
                </div>

                {/* avatars */}
                <div className="flex items-center gap-2">
                  <Avatar.Group
                    max={{
                      count: 4,
                      style: {
                        color: "#0f172a",
                        backgroundColor: "#e2e8f0",
                        fontWeight: 600,
                      },
                    }}
                  >
                    {s.avatars.map((a, i) => (
                      <Avatar
                        key={i}
                        src={a}
                        size={28}
                        style={{ border: "2px solid #fff" }}
                      />
                    ))}
                  </Avatar.Group>

                  <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
                    <MoreOutlined />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CardFooterButton label="Upcoming Schedule" />
    </Card>
  );
}

/** ---------- 2) Project Status ---------- */
function ProjectStatusCard() {
  const projects = useMemo(
    () => [
      {
        title: "Apps Development",
        sub: "Applications",
        pct: 54,
        color: "#3b82f6",
        icon: "/assets/app-store.png",
      },
      {
        title: "Dashboard Design",
        sub: "App UI Kit",
        pct: 100,
        color: "#22c55e",
        icon: "/assets/figma.png",
      },
      {
        title: "Facebook Marketing",
        sub: "Marketing",
        pct: 90,
        color: "#38bdf8",
        icon: "/assets/facebook.png",
      },
      {
        title: "React Dashboard Github",
        sub: "Dashboard",
        pct: 37,
        color: "#f59e0b",
        icon: "/assets/github.png",
      },
      {
        title: "Paypal Payment Gateway",
        sub: "Payment",
        pct: 29,
        color: "#ef4444",
        icon: "/assets/paypal.png",
      },
    ],
    [],
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">
            Project Status
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 hover:bg-slate-100">
            <InfoCircleOutlined />
          </button>
        </div>
      }
    >
      <div className="border-t border-slate-100 px-6 py-4">
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">
                <Image
                  src={p.icon}
                  alt={p.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-slate-900">
                  {p.title}
                </div>
                <div className="text-xs text-slate-500">{p.sub}</div>
              </div>

              <div className="flex w-[55%] items-center gap-3">
                <Progress
                  percent={p.pct}
                  showInfo={false}
                  strokeColor={p.color}
                  railColor="#eef2f7"
                  size="small"
                />
                <div className="w-12 text-right text-sm font-semibold text-slate-600">
                  {p.pct}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CardFooterButton label="Upcoming Projects" />
    </Card>
  );
}

/** ---------- 3) Team Progress ---------- */
function TeamProgressCard() {
  const people = useMemo(
    () => [
      {
        name: "Alexandra Della",
        role: "Frontend Developer",
        pct: 40,
        color: "#ef4444",
        avatar: "/assets/2.png",
      },
      {
        name: "Archie Cantones",
        role: "UI/UX Designer",
        pct: 65,
        color: "#1d4ed8",
        avatar: null,
        initial: "A",
        initialBg: "#22c55e",
      },
      {
        name: "Malanie Hanvey",
        role: "Backend Developer",
        pct: 50,
        color: "#f59e0b",
        avatar: "/assets/3.png",
      },
      {
        name: "Kenneth Hune",
        role: "Digital Marketer",
        pct: 75,
        color: "#22c55e",
        avatar: "/assets/7.png",
      },
    ],
    [],
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">
            Team Progress
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 hover:bg-slate-100">
            <InfoCircleOutlined />
          </button>
        </div>
      }
    >
      <div className="border-t border-slate-100 px-6 py-4">
        <div className="space-y-4">
          {people.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-dashed border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar
                    size={44}
                    src={p.avatar || undefined}
                    style={{
                      background: p.avatar
                        ? undefined
                        : p.initialBg || "#e2e8f0",
                      fontWeight: 800,
                    }}
                  >
                    {!p.avatar ? p.initial : null}
                  </Avatar>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900">
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-500">{p.role}</div>
                  </div>
                </div>

                <div className="relative">
                  <Progress
                    type="circle"
                    percent={p.pct}
                    size={54}
                    strokeColor={p.color}
                    railColor="#eef2f7"
                    format={(n) => (
                      <span className="text-xs font-semibold text-slate-700">
                        {n}%
                      </span>
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CardFooterButton label="Update 30 min ago" />
    </Card>
  );
}

/** ---------- Export: all 3 in one grid ---------- */
export default function BottomThreeCards() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-4">
        <UpcomingScheduleCard />
      </div>
      <div className="xl:col-span-4">
        <ProjectStatusCard />
      </div>
      <div className="xl:col-span-4">
        <TeamProgressCard />
      </div>
    </div>
  );
}
