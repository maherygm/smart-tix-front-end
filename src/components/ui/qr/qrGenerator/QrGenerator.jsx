import QRCode from "react-qr-code";
const QrGenerator = () => {
  const value = {
    username: "MAHERY",
    userPass: "123445",
  };
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={JSON.stringify(value)}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QrGenerator;
