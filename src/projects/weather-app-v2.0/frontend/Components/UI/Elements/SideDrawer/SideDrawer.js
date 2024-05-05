import React from 'react';

import './SideDrawer.css';

const SideBar = props => {

  return (
    <aside className='side-drawer'>
      { props.children }
    </aside>
  )
};

export default SideBar;