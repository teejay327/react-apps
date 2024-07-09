import { Outlet } from 'react-router-dom';
import MainNavigation from '../../UI/MainNavigation.js';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
};

export default RootLayout;