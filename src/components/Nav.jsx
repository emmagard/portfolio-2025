import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { getLcn } from '../utils/labelled-classnames';
import NavItem from './NavItem';
import FlowerMain from './FlowerMain';

const nav = [
  {
    label: 'Projects',
    path: '#projects'
  },
  {
    label: 'Skills',
    path: '#skills'
  },
  {
    label: 'Resume',
    path: '#'
  },
  {
    label: 'Contact',
    path: '#contact'
  }
];

const styles =  getLcn({
  navTrigger: [
    'visible absolute font-sans font-semibold text-black',
    'sm:invisible'
  ],
  nav: [
    'pl-[5px]',
    ''
  ],
  navList: [
    'flex flex-row gap-[20px]',
    ''
  ],
});

const Nav = ({}) => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activePath, setActivePath] = useState(null);

  const handleIsActive = (leftVal, topVal, path) => {
    if (leftVal) {
      setFlowerPosition({
        transform: `translateX(${leftVal}px) translateY(${topVal}px) rotateZ(234deg)`
      });
    }
    setActivePath(path);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mb-[60px]">
      <button className={styles.navTrigger} onClick={handleOpenMenu}>{isMenuOpen ? 'X' : 'Menu'}</button>
      <nav className={`${isMenuOpen ? 'visible' : 'invisible'} ${styles.nav}`}>
        <ul className={styles.navList}>
          {nav.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              label={item.label}
              path={item.path}
              isMenuOpen={isMenuOpen}
              isActive={item.path === pathname}
              // handleClick={() => {setIsMenuOpen(false)}}
              handleIsActive={handleIsActive} />
          ))}
        </ul>

      </nav>
  </div>
  );
};

export default Nav;