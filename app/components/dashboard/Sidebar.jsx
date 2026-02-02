"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  DashboardOutlined,
  BarChartOutlined,
  FileTextOutlined,
  RocketOutlined,
  DollarOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  ProjectOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Sider } = Layout;

function getOpenKeysFromPath(pathname) {
  if (pathname.startsWith("/dashboard")) return ["dashboards"];
  return [];
}

export default function Sidebar({ collapsed = false }) {
  const pathname = usePathname();

  const selectedKey = useMemo(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/")
      return "dashboard_home";
    if (pathname.startsWith("/dashboard/analytics")) return "analytics";
    if (pathname.startsWith("/dashboard/reports")) return "reports";
    if (pathname.startsWith("/dashboard/applications")) return "applications";
    if (pathname.startsWith("/dashboard/proposal")) return "proposal";
    if (pathname.startsWith("/dashboard/payment")) return "payment";
    if (pathname.startsWith("/dashboard/customers")) return "customers";
    if (pathname.startsWith("/dashboard/leads")) return "leads";
    if (pathname.startsWith("/dashboard/projects")) return "projects";
    if (pathname.startsWith("/dashboard/widgets")) return "widgets";
    if (pathname.startsWith("/dashboard/settings")) return "settings";
    if (pathname.startsWith("/dashboard/auth")) return "auth";
    if (pathname.startsWith("/dashboard/help")) return "help";
    return "dashboard_home";
  }, [pathname]);

  const defaultOpenKeys = useMemo(
    () => getOpenKeysFromPath(pathname),
    [pathname]
  );

  const items = useMemo(
    () => [
      {
        type: "group",
        label: (
          <span className="text-[11px] font-semibold tracking-wider text-slate-400">
            NAVIGATION
          </span>
        ),
        children: [
          {
            key: "dashboards",
            icon: <DashboardOutlined />,
            label: "Dashboards",
            children: [
              {
                key: "dashboard_home",
                icon: <AppstoreOutlined />,
                label: <Link href="/dashboard">CRM</Link>,
              },
            ],
          },

          {
            key: "analytics",
            icon: <BarChartOutlined />,
            label: <Link href="/dashboard/analytics">Analytics</Link>,
          },
          {
            key: "reports",
            icon: <FileTextOutlined />,
            label: <Link href="/dashboard/reports">Reports</Link>,
          },
          {
            key: "applications",
            icon: <RocketOutlined />,
            label: <Link href="/dashboard/applications">Applications</Link>,
          },
          {
            key: "proposal",
            icon: <FileTextOutlined />,
            label: <Link href="/dashboard/proposal">Proposal</Link>,
          },
          {
            key: "payment",
            icon: <DollarOutlined />,
            label: <Link href="/dashboard/payment">Payment</Link>,
          },
          {
            key: "customers",
            icon: <TeamOutlined />,
            label: <Link href="/dashboard/customers">Customers</Link>,
          },
          {
            key: "leads",
            icon: <UsergroupAddOutlined />,
            label: <Link href="/dashboard/leads">Leads</Link>,
          },
          {
            key: "projects",
            icon: <ProjectOutlined />,
            label: <Link href="/dashboard/projects">Projects</Link>,
          },
          {
            key: "widgets",
            icon: <AppstoreOutlined />,
            label: <Link href="/dashboard/widgets">Widgets</Link>,
          },
          {
            key: "settings",
            icon: <SettingOutlined />,
            label: <Link href="/dashboard/settings">Settings</Link>,
          },
          {
            key: "auth",
            icon: <SafetyCertificateOutlined />,
            label: <Link href="/dashboard/auth">Authentication</Link>,
          },
          {
            key: "help",
            icon: <QuestionCircleOutlined />,
            label: <Link href="/dashboard/help">Help Center</Link>,
          },
        ],
      },
    ],
    []
  );

  return (
    <Sider
      collapsed={collapsed}
      trigger={null}
      width={260}
      collapsedWidth={84}
      className="!bg-white border-r border-slate-100"
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* Brand / Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
        <div className="grid h-7 w-9 place-items-center rounded-xl bg-slate-900 text-white font-bold">
          D
        </div>

        {!collapsed && (
          <div className="leading-none">
            <Image
              src="/assets/logo-full.png"
              alt="Duralux"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="px-2 py-3">
        <Menu
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]}
          defaultOpenKeys={defaultOpenKeys}
          className="border-0"
          style={{ background: "transparent" }}
        />
      </div>
    </Sider>
  );
}
