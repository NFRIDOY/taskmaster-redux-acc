import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
