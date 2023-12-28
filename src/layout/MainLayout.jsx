// rrd imports
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
