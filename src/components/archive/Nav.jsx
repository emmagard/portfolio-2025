import React from "react";
import { getLcn } from '../../utils/labelled-classnames';
import NavItem from '../NavItem';

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
    path: '/emma-gardner-resume-2025.pdf'
  },
  {
    label: 'Contact',
    path: '#contact'
  }
];

const styles =  getLcn({
  nav: [
    'pl-0',
    'sm:pl-[5px]',
  ],
  navList: [
    'flex flex-row gap-[8px]',
    'sm:gap-[20px]'
  ],
});

const Nav = ({}) => {
  return (
    <div className="mb-[80px]">
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {nav.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              label={item.label}
              path={item.path}
            />
          ))}
        </ul>

      </nav>
  </div>
  );
};

export default Nav;