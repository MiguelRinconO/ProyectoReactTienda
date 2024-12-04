import Footer from "./Footer";
import Navba from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navba />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
