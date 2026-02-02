"use client";

import React, { useState } from "react";
import { Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import SubHeaderBar from "../components/dashboard/SubHeaderBar";

const { Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdRegistry>
      <Layout className="min-h-screen bg-slate-50">
        <Sidebar collapsed={collapsed} />

        <Layout className="bg-slate-50">
          {/* Sticky top area */}
          <div className="sticky top-0 z-50">
            <Navbar
              collapsed={collapsed}
              onToggleSidebar={() => setCollapsed((v) => !v)}
            />
            <SubHeaderBar />
          </div>

          {/* ✅ Full width content (no max-w / no mx-auto) */}
          <Content className="p-4 sm:p-6">
            <div className="w-full">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
}
