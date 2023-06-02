import Link from "next/link";
import Spacer from "./Spacer";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "black",
};

const header = {
  position: "fixed",
  padding: "1rem",
  top: 0,
  left: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#CC5E21",
  color: "white",
};

const body= {
  fontFamily: 'poppins',
  margin: 0,
}

const footer = {
  position: "fixed",
  padding: "1rem",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "1rem",
  backgroundColor: "#CC5E21",
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const instagramLogo = {
  width: "1rem",
  height: "1rem"
}

const Header = () => (
  <div style={header}>
    
  </div>
);

const Layout = () => {
  return (
    <div style={body}>
      {" "}
      <Header />

       <Footer />
    </div>
  );
};

const Footer = () => (
  <div style={footer}>
    
  </div>
);

export default Layout;
