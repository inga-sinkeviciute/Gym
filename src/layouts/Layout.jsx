import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer className="Footer" />
    </>
  );
};

export default Layout;
