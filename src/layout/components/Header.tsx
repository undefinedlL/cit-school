import Logo from './Logo';
import s from '../../styles/Header.module.scss';
import { FC } from "react";
import { Link } from 'react-router';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav className={s.nav}>
        <Link className={s.nav_link} to="/courses">курсы</Link>
        <Link className={s.nav_link} to="/about">о нас</Link>
        <Link className={s.nav_link} to="/contacts">контакты</Link>
      </nav>

    </header>
  )
}

export default Header