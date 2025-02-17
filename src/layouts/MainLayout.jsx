import { Outlet } from "react-router-dom";
import Header from "../components/pages/pages/Header";
import Footer from "../components/pages/pages/Footer";

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
