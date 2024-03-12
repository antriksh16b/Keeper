let customStyle = {
  position: "absolute",
  textAlign: "center",
  width: "100%",
  height: "40px",
};
function Footer() {
  return <p style={customStyle}>{new Date().getFullYear()}</p>;
}
export default Footer;
