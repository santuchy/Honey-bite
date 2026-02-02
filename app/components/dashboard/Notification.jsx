import { Avatar, List, Typography } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const notifications = [
  {
    id: 1,
    name: "Malanie Hanvey",
    msg: "We should talk about that at lunch!",
    time: "2 minutes ago",
    avatar: "/assets/avatar.png",
  },
  {
    id: 2,
    name: "Valentine Maton",
    msg: "You can download the latest invoices now.",
    time: "36 minutes ago",
    avatar: "/assets/avatar.png",
  },
  {
    id: 3,
    name: "Archie Cantones",
    msg: "Don't forget to pickup Jeremy after school!",
    time: "53 minutes ago",
    avatar: "/assets/avatar.png",
  },
];

const Notification = () => {
  return (
    <div
      style={{
        width: 420,
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
      }}
    >
      {/* header */}
      <div
        style={{
          padding: "18px 22px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={5} style={{ margin: 0 }}>
          Notifications
        </Title>

        <Text style={{ color: "#17c666", cursor: "pointer", fontWeight: 600 }}>
          <CheckOutlined /> Make as Read
        </Text>
      </div>

      {/* list */}
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item
            style={{ padding: "16px 22px" }}
            actions={[<CloseOutlined key="x" style={{ color: "#ff4d4f" }} />]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.avatar}
                  size={56}
                  style={{ borderRadius: 10 }}
                />
              }
              title={
                <span style={{ fontWeight: 600 }}>
                  {item.name} {item.msg}
                </span>
              }
              description={<Text type="secondary">{item.time}</Text>}
            />
          </List.Item>
        )}
      />

      {/* footer */}
      <div
        style={{
          padding: 16,
          textAlign: "center",
          fontWeight: 600,
          borderTop: "1px solid #f0f0f0",
          cursor: "pointer",
        }}
      >
        Alls Notifications
      </div>
    </div>
  );
};
export default Notification;