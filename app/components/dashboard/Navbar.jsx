"use client";

import React from "react";
import { Layout, Button, Avatar, Badge, Space, Dropdown } from "antd";
import {
  AiOutlineClockCircle,
  AiOutlineBell,
  AiOutlinePlus,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoScreenFull } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import Image from "next/image";

import Languages from "./Languages";
import Timesheet from "./Timesheet";
import Notification from "./Notification";
import Profile from "./Profile";

const { Header: AntHeader } = Layout;

const Navbar = ({ collapsed, onToggleSidebar }) => {
  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Space size={14}>
        {/* Sidebar toggle */}
        <Button
          type="text"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          icon={<CgMenuLeft size={24} />}
        />

        <Button type="primary" shape="circle" icon={<AiOutlinePlus />} />
        <Button style={{ fontWeight: 600, letterSpacing: 1 }}>MEGA MENU</Button>
      </Space>

      <Space size={18}>
        <CiSearch size={20} style={{ cursor: "pointer" }} />

        <Dropdown trigger={["hover"]} placement="bottomRight" popupRender={() => <Languages />}>
          <Image
            src="/assets/flags/us.svg"
            alt="flag"
            width={22}
            height={16}
            style={{ cursor: "pointer" }}
          />
        </Dropdown>

        <GoScreenFull size={20} style={{ cursor: "pointer" }} />
        <BsMoon size={18} style={{ cursor: "pointer" }} />

        <Dropdown trigger={["hover"]} placement="bottomRight" popupRender={() => <Timesheet />}>
          <Badge styles={{ indicator: { backgroundColor: "#17c666" } }} count={2}>
            <AiOutlineClockCircle size={20} style={{ cursor: "pointer" }} />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} placement="bottomRight" popupRender={() => <Notification />}>
          <Badge count={3}>
            <AiOutlineBell size={20} style={{ cursor: "pointer" }} />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} placement="bottomRight" popupRender={() => <Profile />}>
          <Avatar src="/assets/avatar.png" style={{ cursor: "pointer" }} />
        </Dropdown>
      </Space>
    </AntHeader>
  );
};

export default Navbar;
