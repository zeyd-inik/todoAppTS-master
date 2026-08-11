import { CiLight } from 'react-icons/ci';
import { HiOutlineMoon } from 'react-icons/hi';

import { type Theme } from '../types';

import './Header.css';

type HeaderProps = {
  changeTheme: () => void;
  theme: Theme;
};

export default function Header({ changeTheme, theme }: HeaderProps) {
  return (
    <header className="Header">
      <span className="logo">todo</span>
      {theme === 'dark' ? (
        <CiLight
          onClick={() => changeTheme()}
          className="sun_icon"
        />
      ) : (
        <HiOutlineMoon
          onClick={() => changeTheme()}
          className="moon_icon"
        />
      )}
    </header>
  );
}
