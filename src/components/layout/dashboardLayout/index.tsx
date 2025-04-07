import { ReactNode } from 'react';

import AppHeader from 'components/shared/header';
import AppBar from 'components/shared/appBar';

interface Props {
  children: ReactNode;
  className: string;
}

const DashboardLayout = ({ className, children }: Props) => {
  return (
    <div className='dashboard-layout-container relative w-full min-h-screen'>
      <AppBar />
      <AppHeader />
      <div
        className={`dashboard-body box-border mx-[140px] mt-[65px] pb-[100px] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
