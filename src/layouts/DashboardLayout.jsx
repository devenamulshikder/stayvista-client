import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* sidebar */}
      <div>
        <Sidebar/>
      </div>
      {/* outlet */}
      <div className="flex-1 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
