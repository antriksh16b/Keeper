let customStyle = {
  height: "80px",
  backgroundColor: "#ebc934",
  display: "flex",
  alignItems: "center",
  paddingLeft: "40px",
  fontSize: "1rem",
  color: "white",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
};
export default function Header() {
  return (
    <div style={customStyle}>
      <h1>Keeper</h1>;
    </div>
  );
}
