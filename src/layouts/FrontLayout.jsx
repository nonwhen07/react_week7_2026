import { Outlet } from 'react-router-dom';
import FrontHeader from '@/components/front/FrontHeader';
import FrontFooter from '@/components/front/FrontFooter';
import GoTop from '@/components/GoTop';

export default function FrontLayout() {
  return (
    <>
      <FrontHeader />
      <main className="ui-layout">
        <Outlet />
      </main>
      <GoTop />
      <FrontFooter />
    </>
  );
}
