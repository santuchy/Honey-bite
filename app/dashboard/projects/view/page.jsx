"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Progress,
  Row,
  Space,
  Tabs,
  Tag,
  Typography,
} from "antd";
import {
  PlusOutlined,
  ShareAltOutlined,
  MoreOutlined,
  ReloadOutlined,
  CalendarOutlined,
  BarChartOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

const { Title, Text } = Typography;

const AVATARS = [
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/6.png",
  "/assets/7.png",
];

const BRANDS = {
  app: "/assets/app-store.png",
  figma: "/assets/figma.png",
  fb: "/assets/facebook.png",
  github: "/assets/github.png",
  paypal: "/assets/paypal.png",
};

function SmallKpiCard({ iconColor, iconBg, title, time }) {
  return (
    <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 30 } }}>
      <div className="flex items-start gap-3">
        <div
          className="grid h-9 w-9 place-items-center rounded-xl"
          style={{ background: iconBg, color: iconColor }}
        >
          <span className="text-base font-bold">•</span>
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-xs text-slate-500">
            {time}{" "}
            <span className="font-medium text-slate-700">Total Billed:</span>{" "}
            <span className="text-slate-500">00:00</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function SlimProgress({ labelLeft, labelRight, percent, color = "#f97316" }) {
  return (
    <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 16 } }}>
      <div className="flex items-center justify-between">
        <Text className="text-xs font-semibold text-slate-700">{labelLeft}</Text>
        <Text className="text-xs text-slate-500">{labelRight}</Text>
      </div>
      <div className="mt-2">
        <Progress
          percent={percent}
          showInfo={false}
          strokeColor={color}
          railColor="#EEF2F7"
          strokeLinecap="round"
        />
      </div>
    </Card>
  );
}

function EmptyTab({ title }) {
  return (
    <div className="grid min-h-[520px] place-items-center rounded-2xl border border-slate-100 bg-white">
      <div className="text-center">
        <div className="text-lg font-semibold text-slate-900">No {title.toLowerCase()} yet!</div>
        <div className="mt-1 text-sm text-slate-500">
          There is no {title.toLowerCase()} on this project
        </div>

        <div className="mt-6 flex justify-center">
          <button className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-slate-50 text-blue-600 hover:bg-slate-100">
            <PlusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

function OverviewTab() {
  const members = useMemo(
    () => [
      { src: AVATARS[0], name: "Archie" },
      { src: AVATARS[1], name: "Alexandra" },
      { src: AVATARS[2], name: "Melanie" },
      { src: AVATARS[3], name: "Kenneth" },
      { src: AVATARS[4], name: "Valentine" },
    ],
    []
  );

  const chartData = useMemo(
    () => [
      { m: "JAN/23", a: 45, b: 60 },
      { m: "FEB/23", a: 25, b: 35 },
      { m: "MAR/23", a: 70, b: 85 },
      { m: "APR/23", a: 40, b: 55 },
      { m: "MAY/23", a: 78, b: 95 },
      { m: "JUN/23", a: 42, b: 58 },
    ],
    []
  );

  return (
    <div className="space-y-5">
      {/* Project header card */}
      <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 18 } }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-[15px] font-semibold text-slate-900">
                Duralux || CRM Applications &amp; Admin Dashboard
              </div>
              <Tag color="processing" className="!rounded-full">
                In Progress
              </Tag>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <Button size="small" className="!rounded-lg">
                CRM DASHBOARD -
              </Button>

              <Avatar.Group
                max={{
                  count: 4,
                  style: { color: "#0f172a", backgroundColor: "#e2e8f0", fontWeight: 700 },
                }}
              >
                {members.map((m, i) => (
                  <Avatar
                    key={i}
                    src={m.src}
                    size={28}
                    style={{ border: "2px solid #fff" }}
                  />
                ))}
              </Avatar.Group>

              <Text className="text-xs text-slate-500">24 + members</Text>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-8 lg:justify-end">
            <Space size={10}>
              <Button icon={<ReloadOutlined />} className="!rounded-lg" />
              <Button icon={<CalendarOutlined />} className="!rounded-lg" />
              <Button icon={<BarChartOutlined />} className="!rounded-lg" />
            </Space>

            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              className="!rounded-lg !bg-emerald-500 !shadow-none"
            >
              START TIMER
            </Button>
          </div>
        </div>
      </Card>

      {/* Main grid */}
      <Row gutter={[16, 16]}>
        {/* Left big info card */}
        <Col xs={24} lg={16}>
          <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 0 } }}>
            {/* top progress header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <Text className="text-xs text-slate-500">Projects In Progress</Text>
              <Text className="text-xs text-slate-500">16/25 Tasks Completed (78%)</Text>
            </div>

            <div className="px-6 py-4">
              <Progress
                percent={78}
                showInfo={false}
                strokeColor="#2563eb"
                railColor="#EEF2F7"
                strokeLinecap="round"
              />

              {/* info grid */}
              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Project</Text>
                  <Text className="block text-sm font-semibold text-slate-900">
                    #01 - CRM Applications - G.Cute
                  </Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Billing Type</Text>
                  <Text className="block text-sm text-slate-700">Project Hours</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Status</Text>
                  <Text className="block text-sm text-slate-700">In Progress</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Customer</Text>
                  <Text className="block text-sm text-slate-700">Green Cute</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Start Date</Text>
                  <Text className="block text-sm text-slate-700">2023-02-25</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">End Date</Text>
                  <Text className="block text-sm text-slate-700">2023-03-20</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Hourly Rate</Text>
                  <Text className="block text-sm text-slate-700">$25.00</Text>
                </div>

                <div>
                  <Text className="block text-[11px] font-semibold text-slate-500">Logged Hours</Text>
                  <Text className="block text-sm text-slate-700">00:00:00</Text>
                </div>
              </div>

              {/* description */}
              <div className="mt-7">
                <Text className="block text-[11px] font-semibold text-slate-500">Description</Text>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  CRM (Customer Relationship Management) applications are software tools that help
                  organizations manage interactions with their customers, streamline sales and
                  marketing activities, and improve overall customer satisfaction. There are many
                  different CRM applications available…
                  <ul className="mt-3 list-disc pl-5 text-slate-600">
                    <li>Contact Management</li>
                    <li>Sales Management</li>
                    <li>Marketing Automation</li>
                    <li>Customer Service &amp; Support</li>
                    <li>Analytics &amp; Reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* Right column */}
        <Col xs={24} lg={8}>
          <div className="space-y-4">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={12}>
                <SmallKpiCard
                  iconBg="#EEF2FF"
                  iconColor="#2563eb"
                  title="Logged Hours:"
                  time="00:00"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <SmallKpiCard
                  iconBg="#FFF7ED"
                  iconColor="#f97316"
                  title="Billable Hours:"
                  time="00:00"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <SmallKpiCard
                  iconBg="#ECFDF5"
                  iconColor="#22c55e"
                  title="Billed Hours:"
                  time="00:00"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <SmallKpiCard
                  iconBg="#FEF2F2"
                  iconColor="#ef4444"
                  title="Unbilled Hour:"
                  time="00:00"
                />
              </Col>
            </Row>

            <SlimProgress
              labelLeft="16 / 25 Open Tasks"
              labelRight=""
              percent={64}
              color="#f97316"
            />
            <SlimProgress
              labelLeft="25 / 25 Days Left"
              labelRight=""
              percent={100}
              color="#22c55e"
            />

            {/* small chart card */}
            <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 18 } }}>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 8, right: 10, left: -10, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="m" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="b" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="a" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default function ProjectsViewPage() {
  const [activeKey, setActiveKey] = useState("overview");

  const menu = {
    items: [
      { key: "1", label: "Edit Project" },
      { key: "2", label: "Duplicate" },
      { key: "3", label: "Archive" },
    ],
  };

  const tabs = [
    { key: "overview", label: "Overview", children: <OverviewTab /> },
    { key: "activity", label: "Activity", children: <EmptyTab title="Activity" /> },
    { key: "timesheets", label: "Timesheets", children: <EmptyTab title="Timesheets" /> },
    { key: "milestones", label: "Milestones", children: <EmptyTab title="Milestones" /> },
    { key: "discussions", label: "Discussions", children: <EmptyTab title="Discussions" /> },
  ];

  return (
    <div className="space-y-4">
      {/* Top line: Breadcrumb + buttons */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Breadcrumb
          items={[
            { title: <span className="font-semibold text-slate-900">Projects</span> },
            { title: "Home" },
            { title: "View" },
          ]}
        />

        <div className="flex flex-wrap items-center justify-start gap-10 md:justify-end">
          <Dropdown menu={menu} trigger={["click"]} placement="bottomRight">
            <Button className="!rounded-lg" icon={<MoreOutlined />} />
          </Dropdown>

          <Space size={10}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="!rounded-lg !bg-[#2F54EB] !shadow-none"
            >
              CREATE PROJECT
            </Button>

            <Button
              type="primary"
              icon={<ShareAltOutlined />}
              className="!rounded-lg !bg-[#2F54EB] !shadow-none"
            >
              SHARE PROJECT
            </Button>
          </Space>
        </div>
      </div>

      {/* Tabs header (match screenshot style) */}
      <div className="rounded-2xl border border-slate-100 bg-white">
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          items={tabs}
          className="project-view-tabs"
        />
      </div>

      <style jsx global>{`
        .project-view-tabs .ant-tabs-nav {
          margin: 0 !important;
          padding: 0 16px !important;
        }
        .project-view-tabs .ant-tabs-tab {
          padding: 16px 18px !important;
          font-weight: 600;
          color: #0f172a;
        }
        .project-view-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #2f54eb !important;
        }
        .project-view-tabs .ant-tabs-ink-bar {
          background: #2f54eb !important;
          height: 3px !important;
        }
        .project-view-tabs .ant-tabs-content-holder {
          background: #f5f6f8;
          border-top: 1px solid #eef2f7;
          padding: 16px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      `}</style>
    </div>
  );
}
