import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  )
};

export default RootLayout;