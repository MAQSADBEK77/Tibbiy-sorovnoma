// rrd imports
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark flex">
      <Header />
      <main className="w-[65%] relative left-1/2 -translate-x-1/3">
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
