import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
