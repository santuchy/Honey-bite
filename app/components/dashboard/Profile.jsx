import {
  UserOutlined,
  DollarOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  LineChartOutlined,
  CreditCardOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Space } from "antd";

const Item = ({ icon, label, showArrow = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 22px",
      cursor: "pointer",
    }}
    className="profile-item"
  >
    <Space size={14}>
      {icon}
      <span style={{ fontWeight: 500 }}>{label}</span>
    </Space>

    {showArrow && <RightOutlined />}
  </div>
);

const Profile = () => {
  return (
    <div
      style={{
        width: 360,
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          padding: 22,
          display: "flex",
          alignItems: "center",
          gap: 16,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Avatar src="/assets/avatar.png" size={60} />

        <div>
          <div style={{ fontWeight: 600, fontSize: 16 }}>
            Alexandra Della
            <span
              style={{
                marginLeft: 8,
                background: "#e8fff0",
                color: "#17c666",
                fontSize: 12,
                padding: "2px 8px",
                borderRadius: 6,
              }}
            >
              PRO
            </span>
          </div>

          <div style={{ color: "#6b7280", fontSize: 13 }}>
            alex.della@outlook.com
          </div>
        </div>
      </div>

      {/* Menu */}
      <Item
        icon={<span style={{ color: "#17c666" }}>●</span>}
        label="Active"
        showArrow
      />

      <Divider style={{ margin: 0 }} />

      <Item icon={<DollarOutlined />} label="Subscriptions" showArrow />
      <Item icon={<UserOutlined />} label="Profile Details" />
      <Item icon={<LineChartOutlined />} label="Activity Feed" />
      <Item icon={<CreditCardOutlined />} label="Billing Details" />
      <Item icon={<BellOutlined />} label="Notifications" />
      <Item icon={<SettingOutlined />} label="Account Settings" />

      <Divider style={{ margin: 0 }} />

      <Item icon={<LogoutOutlined />} label="Logout" />
    </div>
  );
};
export default Profile;