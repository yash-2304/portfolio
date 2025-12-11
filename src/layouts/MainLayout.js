import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-theme text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
