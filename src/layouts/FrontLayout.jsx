import { Outlet } from 'react-router-dom';
import FrontHeader from '@/components/front/FrontHeader';
import FrontFooter from '@/components/front/FrontFooter';
import GoTop from '@/components/GoTop';
// import useAuthInit from '@/hooks/useAuthInit';
import useCartInit from '@/hooks/useCartInit';

const FrontLayout = () => {
  // 初始化 Auth、Cart
  // useAuthInit();
  useCartInit();

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
};
export default FrontLayout;
