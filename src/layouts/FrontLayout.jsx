import { Outlet } from 'react-router-dom';
import FrontNavBar from '@/components/front/FrontNavBar';
import FrontFooter from '@/components/front/FrontFooter';
import GoTop from '@/components/GoTop';

export default function FrontLayout() {
  return (
    <>
      <FrontNavBar />
      <main className="ui-layout">
        <Outlet />
      </main>
      <GoTop />
      <FrontFooter />
    </>
  );
}
