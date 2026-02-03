"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Card,
  Table,
  Select,
  Input,
  Space,
  Button,
  Avatar,
  Dropdown,
  Pagination,
  Typography,
} from "antd";
import {
  EyeOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const PAGE_SIZE = 10;

const BRAND_ICONS = {
  app: "/assets/app-store.png",
  figma: "/assets/figma.png",
  fb: "/assets/facebook.png",
  github: "/assets/github.png",
  paypal: "/assets/paypal.png",
};

const AVATARS = ["/assets/2.png", "/assets/3.png", "/assets/4.png", "/assets/6.png", "/assets/7.png"];

function StatusDot({ color }) {
  return <span className="inline-block h-2 w-2 rounded-full" style={{ background: color }} />;
}

const STATUS_OPTIONS = [
  { value: "In Progress", color: "#2563eb" },
  { value: "Not Started", color: "#f59e0b" },
  { value: "On Hold", color: "#22c55e" },
  { value: "Declined", color: "#ef4444" },
  { value: "Finished", color: "#06b6d4" },
];

const ASSIGNEE_OPTIONS = [
  { value: "arcje.tones@gmail.com", avatar: "/assets/2.png" },
  { value: "jon.tones@gmail.com", avatar: "/assets/3.png" },
  { value: "lanie.nveyn@gmail.com", avatar: "/assets/4.png" },
  { value: "nneth.une@gmail.com", avatar: "/assets/6.png" },
  { value: "erna.serpa@outlook.com", avatar: "/assets/7.png" },
  { value: "mar.audrey@gmail.com", avatar: "/assets/2.png" },
  { value: "nancy.elliot@outlook.com", avatar: "/assets/3.png" },
];

function ProjectCell({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50">
        <Image src={icon} alt="" width={28} height={28} className="object-contain" />
      </div>

      <div className="min-w-0">
        <div className="truncate font-semibold text-slate-900">
          {title}
        </div>
        <div className="truncate text-xs text-slate-500">{desc}</div>
      </div>
    </div>
  );
}

function CustomerCell({ name, avatar }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar size={34} src={avatar} />
      <div className="min-w-0 truncate font-semibold text-slate-900">{name}</div>
    </div>
  );
}

function AssignedSelect({ value, onChange }) {
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: 260 }}
      size="middle"
      optionLabelProp="label"
      suffixIcon={<span className="text-slate-400">▾</span>}
      options={ASSIGNEE_OPTIONS.map((a) => ({
        value: a.value,
        label: a.value,
        avatar: a.avatar,
      }))}
      optionRender={(opt) => (
        <div className="flex items-center gap-3">
          <Avatar size={22} src={opt.data.avatar} />
          <div className="truncate">{opt.data.value}</div>
        </div>
      )}
      labelRender={(opt) => {
        const a = ASSIGNEE_OPTIONS.find((x) => x.value === opt.value);
        return (
          <div className="flex items-center gap-2">
            <Avatar size={20} src={a?.avatar} />
            <span className="truncate">{opt.label}</span>
          </div>
        );
      }}
    />
  );
}

function StatusSelect({ value, onChange }) {
  const current = STATUS_OPTIONS.find((s) => s.value === value) || STATUS_OPTIONS[0];
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: 210 }}
      size="middle"
      suffixIcon={<span className="text-slate-400">▾</span>}
      options={STATUS_OPTIONS.map((s) => ({
        value: s.value,
        label: s.value,
        color: s.color,
      }))}
      optionRender={(opt) => (
        <div className="flex items-center gap-3">
          <StatusDot color={opt.data.color} />
          <div>{opt.data.label}</div>
        </div>
      )}
      labelRender={() => (
        <div className="flex items-center gap-3">
          <StatusDot color={current.color} />
          <span>{current.value}</span>
        </div>
      )}
    />
  );
}

export default function ProjectsPage() {
  const initialRows = useMemo(
    () => [
      {
        key: 1,
        brand: BRAND_ICONS.app,
        projectTitle: "Spark: This name could work well for a proje...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Alexandra Della",
        customerAvatar: AVATARS[0],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "arcje.tones@gmail.com",
        status: "In Progress",
      },
      {
        key: 2,
        brand: BRAND_ICONS.github,
        projectTitle: "Nexus: This name could work well for a proje...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Green Cute",
        customerAvatar: AVATARS[1],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "jon.tones@gmail.com",
        status: "Not Started",
      },
      {
        key: 3,
        brand: BRAND_ICONS.fb,
        projectTitle: "Velocity: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Nancy Elliot",
        customerAvatar: AVATARS[2],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "lanie.nveyn@gmail.com",
        status: "On Hold",
      },
      {
        key: 4,
        brand: BRAND_ICONS.figma,
        projectTitle: "Catalyst: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Henry Leach",
        customerAvatar: AVATARS[3],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "nneth.une@gmail.com",
        status: "Declined",
      },
      {
        key: 5,
        brand: BRAND_ICONS.github,
        projectTitle: "Odyssey: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Marianne Audrey",
        customerAvatar: AVATARS[4],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "erna.serpa@outlook.com",
        status: "Finished",
      },
      {
        key: 6,
        brand: BRAND_ICONS.paypal,
        projectTitle: "Synergy: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Cute Green",
        customerAvatar: AVATARS[0],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "mar.audrey@gmail.com",
        status: "In Progress",
      },
      {
        key: 7,
        brand: BRAND_ICONS.app,
        projectTitle: "Zenith: This name could work well for a proje...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Leach Henry",
        customerAvatar: AVATARS[1],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "nancy.elliot@outlook.com",
        status: "Not Started",
      },
      {
        key: 8,
        brand: BRAND_ICONS.fb,
        projectTitle: "Momentum: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Audrey Marianne",
        customerAvatar: AVATARS[2],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "arcje.tones@gmail.com",
        status: "On Hold",
      },
      {
        key: 9,
        brand: BRAND_ICONS.paypal,
        projectTitle: "Horizon: This name could work well for a...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Elliot Nancy",
        customerAvatar: AVATARS[3],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "jon.tones@gmail.com",
        status: "Declined",
      },
      {
        key: 10,
        brand: BRAND_ICONS.github,
        projectTitle: "Zenith: This name could work well for a proje...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Della Henry",
        customerAvatar: AVATARS[4],
        start: "2023-04-05",
        end: "2023-04-10",
        assigned: "lanie.nveyn@gmail.com",
        status: "Finished",
      },

      // ✅ page-2 will show these 2 rows (because page size = 10)
      {
        key: 11,
        brand: BRAND_ICONS.figma,
        projectTitle: "Nova: A clean UI kit project name that fits...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Jordan Smith",
        customerAvatar: AVATARS[0],
        start: "2023-04-11",
        end: "2023-04-18",
        assigned: "mar.audrey@gmail.com",
        status: "In Progress",
      },
      {
        key: 12,
        brand: BRAND_ICONS.app,
        projectTitle: "Atlas: This name could work well for a product...",
        projectDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing...",
        customer: "Sabrina Khan",
        customerAvatar: AVATARS[1],
        start: "2023-04-12",
        end: "2023-04-22",
        assigned: "erna.serpa@outlook.com",
        status: "Not Started",
      },
    ],
    []
  );

  const [rows, setRows] = useState(initialRows);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) => {
      return (
        r.projectTitle.toLowerCase().includes(s) ||
        r.customer.toLowerCase().includes(s) ||
        r.assigned.toLowerCase().includes(s) ||
        r.status.toLowerCase().includes(s)
      );
    });
  }, [rows, q]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  const onChangeAssigned = (key, newValue) => {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...r, assigned: newValue } : r))
    );
  };

  const onChangeStatus = (key, newValue) => {
    setRows((prev) =>
      prev.map((r) => (r.key === key ? { ...r, status: newValue } : r))
    );
  };

  const columns = useMemo(
    () => [
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            PROJECT-NAME
          </span>
        ),
        dataIndex: "projectTitle",
        key: "project",
        sorter: (a, b) => a.projectTitle.localeCompare(b.projectTitle),
        render: (_, r) => (
          <ProjectCell icon={r.brand} title={r.projectTitle} desc={r.projectDesc} />
        ),
      },
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            CUSTOMER
          </span>
        ),
        dataIndex: "customer",
        key: "customer",
        sorter: (a, b) => a.customer.localeCompare(b.customer),
        render: (_, r) => <CustomerCell name={r.customer} avatar={r.customerAvatar} />,
      },
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            START DATE
          </span>
        ),
        dataIndex: "start",
        key: "start",
        sorter: (a, b) => a.start.localeCompare(b.start),
        render: (v) => <span className="text-slate-700">{v}</span>,
      },
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            END DATE
          </span>
        ),
        dataIndex: "end",
        key: "end",
        sorter: (a, b) => a.end.localeCompare(b.end),
        render: (v) => <span className="text-slate-700">{v}</span>,
      },
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            ASSIGNED
          </span>
        ),
        dataIndex: "assigned",
        key: "assigned",
        render: (v, r) => (
          <AssignedSelect value={v} onChange={(nv) => onChangeAssigned(r.key, nv)} />
        ),
      },
      {
        title: (
          <span className="text-[11px] font-extrabold tracking-wider text-slate-700">
            STATUS
          </span>
        ),
        dataIndex: "status",
        key: "status",
        render: (v, r) => (
          <StatusSelect value={v} onChange={(nv) => onChangeStatus(r.key, nv)} />
        ),
      },
      {
        title: (
          <div className="text-right text-[11px] font-extrabold tracking-wider text-slate-700">
            ACTIONS
          </div>
        ),
        key: "actions",
        align: "right",
        render: () => (
          <Space size={10}>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
              <EyeOutlined />
            </button>

            <Dropdown
              trigger={["click"]}
              placement="bottomRight"
              menu={{
                items: [
                  { key: "1", label: "Edit" },
                  { key: "2", label: "Duplicate" },
                  { key: "3", label: "Delete" },
                ],
              }}
            >
              <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                <MoreOutlined />
              </button>
            </Dropdown>
          </Space>
        ),
      },
    ],
    [pageSize, page, q]
  );

  const onPageSizeChange = (value) => {
    setPageSize(value);
    setPage(1);
  };

  const showingStart = filtered.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const showingEnd = Math.min(page * pageSize, filtered.length);

  return (
    <Card className="rounded-2xl border border-slate-100 shadow-sm" styles={{ body: { padding: 0 } }}>
      {/* Top bar (Show entries + Search) */}
      <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Text className="text-slate-500">Show</Text>
          <Select
            value={pageSize}
            onChange={onPageSizeChange}
            options={[
              { value: 10, label: "10" },
              { value: 25, label: "25" },
              { value: 50, label: "50" },
            ]}
            size="middle"
            style={{ width: 86 }}
          />
          <Text className="text-slate-500">entries</Text>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Text className="text-slate-500">Search:</Text>
          <Input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            allowClear
            prefix={<SearchOutlined className="text-slate-400" />}
            placeholder="Search..."
            style={{ width: 260 }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="px-4 pb-2 pt-2">
        <Table
          rowSelection={{
            columnWidth: 44,
          }}
          columns={columns}
          dataSource={paged}
          pagination={false}
          rowKey="key"
          className="projects-table"
          scroll={{ x: 1100 }}
        />
      </div>

      {/* Bottom bar (showing + pagination) */}
      <div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Text className="text-xs text-slate-500">
          Showing {showingStart} to {showingEnd} of {filtered.length} entries
        </Text>

        <Pagination
          current={page}
          onChange={(p) => setPage(p)}
          total={filtered.length}
          pageSize={pageSize}
          showSizeChanger={false}
          size="small"
        />
      </div>

      {/* Ant table styling to match screenshot */}
      <style jsx global>{`
        .projects-table .ant-table-thead > tr > th {
          background: #ffffff !important;
          border-bottom: 1px solid #e2e8f0 !important;
          color: #0f172a !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          letter-spacing: 0.08em !important;
          padding-top: 14px !important;
          padding-bottom: 14px !important;
        }
        .projects-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #eef2f7 !important;
          padding-top: 18px !important;
          padding-bottom: 18px !important;
          vertical-align: middle !important;
        }
        .projects-table .ant-table-tbody > tr:hover > td {
          background: #fafafa !important;
        }
        .projects-table .ant-table {
          border-radius: 16px;
        }
      `}</style>
    </Card>
  );
}
