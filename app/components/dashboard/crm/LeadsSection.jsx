"use client";

import React, { useMemo, useState } from "react";
import { Card, Table, Tag, Avatar, Dropdown, Pagination } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

/** ---------- Left card: Leads Overview ---------- */
function LeadsOverviewCard() {
  const data = useMemo(
    () => [
      { name: "New", value: 20, color: "#1d4ed8" },
      { name: "Contacted", value: 15, color: "#2563eb" },
      { name: "Qualified", value: 10, color: "#3b82f6" },
      { name: "Working", value: 18, color: "#60a5fa" },
      { name: "Customer", value: 10, color: "#93c5fd" },
      { name: "Proposal", value: 15, color: "#0ea5e9" },
      { name: "Leads", value: 16, color: "#38bdf8" },
      { name: "Progress", value: 14, color: "#7dd3fc" },
      { name: "Others", value: 10, color: "#bfdbfe" },
    ],
    []
  );

  // donut chart uses the same list (weighted by value)
  const pieData = useMemo(() => data.map((d) => ({ name: d.name, value: d.value, color: d.color })), [data]);

  const total = useMemo(
    () => pieData.reduce((sum, d) => sum + d.value, 0),
    [pieData]
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">Leads Overview</div>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
            <span className="text-xl leading-none">⋮</span>
          </button>
        </div>
      }
    >
      <div className="border-t border-slate-100 px-6 py-6">
        <div className="mx-auto h-[280px] w-full max-w-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={95}
                outerRadius={125}
                paddingAngle={2}
                stroke="none"
              >
                {pieData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(v, name) => [`${v}K`, name]}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                  padding: 10,
                }}
              />
              {/* center label */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "#0f172a" }}
              >
                <tspan x="50%" dy="-6" style={{ fontSize: 20, fontWeight: 700 }}>
                  {total}K
                </tspan>
                <tspan x="50%" dy="18" style={{ fontSize: 12, fill: "#64748b" }}>
                  Total Leads
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* legend grid like demo */}
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <div
              key={d.name}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: d.color }}
                />
                <div className="text-sm font-semibold text-slate-900">
                  {d.name}
                </div>
              </div>
              <div className="text-xs text-slate-500">({d.value}K)</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** ---------- Right card: Latest Leads table ---------- */
function LatestLeadsCard() {
  const [page, setPage] = useState(1);

  const rows = useMemo(
    () => [
      {
        key: 1,
        name: "Archie Cantones",
        email: "arcje.tones@gmail.com",
        avatar: "/assets/2.png",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        status: "Completed",
      },
      {
        key: 2,
        name: "Holmes Cherryman",
        email: "golms.chan@gmail.com",
        avatar: "/assets/3.png",
        initials: "H",
        proposal: "New",
        date: "11/06/2023 10:53",
        status: "In Progress",
      },
      {
        key: 3,
        name: "Melanie Hanvey",
        email: "lanie.nveyn@gmail.com",
        avatar: "/assets/4.png",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        status: "Completed",
      },
      {
        key: 4,
        name: "Kenneth Hune",
        email: "nneth.une@gmail.com",
        avatar: "/assets/6.png",
        initials: "K",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        status: "Not Interested",
      },
      {
        key: 5,
        name: "Valentine Maton",
        email: "alenine.aton@gmail.com",
        avatar: "/assets/7.png",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        status: "Completed",
      },
    ],
    []
  );

  const statusTag = (status) => {
    if (status === "Completed")
      return (
        <Tag className="!m-0 !border-0 !bg-emerald-100 !text-emerald-700 !font-semibold">
          Completed
        </Tag>
      );
    if (status === "In Progress")
      return (
        <Tag className="!m-0 !border-0 !bg-indigo-100 !text-indigo-700 !font-semibold">
          In Progress
        </Tag>
      );
    return (
      <Tag className="!m-0 !border-0 !bg-orange-100 !text-orange-700 !font-semibold">
        Not Interested
      </Tag>
    );
  };

  const proposalTag = (proposal) => {
    return (
      <Tag className="!m-0 !border-0 !bg-slate-100 !text-slate-700 !font-semibold">
        {proposal}
      </Tag>
    );
  };

  const columns = useMemo(
    () => [
      {
        title: "USERS",
        dataIndex: "name",
        key: "users",
        render: (_, r) => (
          <div className="flex items-center gap-3">
            <Avatar
              size={40}
              src={r.avatar || undefined}
              style={{
                background: r.avatar ? undefined : "#22c55e",
                fontWeight: 700,
              }}
            >
              {!r.avatar ? r.initials : null}
            </Avatar>

            <div className="min-w-0">
              <div className="truncate font-semibold text-slate-900">
                {r.name}
              </div>
              <div className="truncate text-xs text-slate-500">{r.email}</div>
            </div>
          </div>
        ),
      },
      {
        title: "PROPOSAL",
        dataIndex: "proposal",
        key: "proposal",
        render: (v) => proposalTag(v),
      },
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        render: (v) => <span className="text-slate-700">{v}</span>,
      },
      {
        title: "STATUS",
        dataIndex: "status",
        key: "status",
        render: (v) => statusTag(v),
      },
      {
        title: "ACTIONS",
        key: "actions",
        align: "right",
        render: () => (
          <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            menu={{
              items: [
                { key: "1", label: "View" },
                { key: "2", label: "Edit" },
                { key: "3", label: "Delete" },
              ],
            }}
          >
            <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
              <MoreOutlined />
            </button>
          </Dropdown>
        ),
      },
    ],
    []
  );

  return (
    <Card
      className="rounded-2xl border border-slate-100 shadow-sm"
      styles={{ body: { padding: 0 } }}
      title={
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-base font-semibold text-slate-900">Latest Leads</div>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
            <span className="text-xl leading-none">⋮</span>
          </button>
        </div>
      }
    >
      <div className="border-t border-slate-100">
        <Table
          columns={columns}
          dataSource={rows}
          pagination={false}
          rowKey="key"
          className="latest-leads-table"
        />

        {/* Pagination (demo like bottom left) */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="opacity-0 select-none">.</div>
          <Pagination
            current={page}
            onChange={setPage}
            total={90}
            pageSize={10}
            showSizeChanger={false}
            size="small"
          />
        </div>
      </div>

      {/* small table styling */}
      <style jsx global>{`
        .latest-leads-table .ant-table {
          border-radius: 0;
        }
        .latest-leads-table .ant-table-thead > tr > th {
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.08em;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }
        .latest-leads-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #eef2f7;
          padding-top: 16px;
          padding-bottom: 16px;
        }
      `}</style>
    </Card>
  );
}

/** ---------- Export: both in one component ---------- */
export default function LeadsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-4">
        <LeadsOverviewCard />
      </div>
      <div className="xl:col-span-8">
        <LatestLeadsCard />
      </div>
    </div>
  );
}
