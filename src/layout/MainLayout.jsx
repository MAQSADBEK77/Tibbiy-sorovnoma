// rrd imports
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark lg:flex">
      <Header />
      <main className="xl:w-[150%] lg:w-[60%] w-full 2xl:left-[45%] xl:left-1/3 lg:-translate-x-1/3">
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
