import { Button, Space, Card, Typography } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";

const Timesheet = () => {
  const { Text, Title } = Typography;

  return (
    <Card
      style={{
        width: 360,
        borderRadius: 14,
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        padding: 0,
      }}
      styles={{ body: { padding: 0 } }}
    >
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
          Timesheets
        </Title>

        <Space style={{ color: "#17c666", fontWeight: 600 }}>
          <AiOutlineClockCircle />3 Upcoming
        </Space>
      </div>

      <div
        style={{
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            display: "block",
            marginBottom: 22,
            fontSize: 16,
            color: "#6b7280",
          }}
        >
          No started timers found yes!
        </Text>

        <Button type="primary" size="large">
          STARTED TIMER
        </Button>
      </div>

      <div
        style={{
          padding: 16,
          borderTop: "1px solid #f0f0f0",
          textAlign: "center",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Alls Timesheets
      </div>
    </Card>
  );
};
export default Timesheet;