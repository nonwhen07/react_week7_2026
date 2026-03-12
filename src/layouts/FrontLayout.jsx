import { Outlet } from 'react-router-dom';
import FrontNavBar from '@/components/front/FrontNavBar';
import Footer from '@/components/front/Footer';
import GoTop from '@/components/GoTop';

export default function FrontLayout() {
  return (
    <>
      <FrontNavBar />
      <main className="ui-layout">
        <Outlet />
      </main>
      <GoTop />
      <Footer />
    </>
  );
}
