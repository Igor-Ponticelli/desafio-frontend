import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="p-4 sm:ml-72 relative min-h-screen bg-zinc-50 dark:bg-zinc-900">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Dashboard;
