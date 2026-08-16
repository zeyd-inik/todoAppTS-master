import './Header.css';

import { CiLight } from 'react-icons/ci';
import { HiOutlineMoon } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeTheme } from '../store/themeStore';

export default function Header() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((store) => {
    return store.theme;
  });
  return (
    <header className="Header">
      <span className="logo">todo</span>
      {theme === 'dark' ? (
        <CiLight
          onClick={() => dispatch(changeTheme())}
          className="sun_icon"
          size={25}
        />
      ) : (
        <HiOutlineMoon
          onClick={() => dispatch(changeTheme())}
          className="moon_icon"
          size={25}
        />
      )}
    </header>
  );
}
