import { Outlet } from "react-router-dom";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
