import { Row, Col, Typography } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

const languages = [
  { name: "Arabic", code: "sa" },
  { name: "Bengali", code: "bd" },
  { name: "Chinese", code: "ch" },
  { name: "Dutch", code: "nl" },
  { name: "English", code: "us" },
  { name: "French", code: "fr" },
  { name: "German", code: "de" },
  { name: "Hindi", code: "in" },
  { name: "Russian", code: "ru" },
  { name: "Spanish", code: "es" },
  { name: "Turkish", code: "tr" },
  { name: "Urdu", code: "pk" },
];

const Languages = () => {
  return (
    <div
      style={{
        width: 560,
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          padding: 24,
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Title level={4} style={{ margin: 0 }}>
            Select Language
          </Title>
          <Text type="secondary">{languages.length} languages available!</Text>
        </div>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          +
        </div>
      </div>

      <div style={{ padding: 24 }}>
        <Row gutter={[18, 18]}>
          {languages.map((lang) => (
            <Col span={8} key={lang.code}>
              <div
                style={{
                  border: "1px dashed #d1d5db",
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                className="lang-item"
              >
                <Image
                  src={`/assets/flags/${lang.code}.svg`}
                  alt={lang.name}
                  width={26}
                  height={18}
                />
                <span style={{ fontWeight: 500 }}>{lang.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Languages;