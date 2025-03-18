import Logo from './Logo';
import s from '../../styles/Header.module.scss';
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <a href="/">
        <Logo />
      </a>
      <nav className={s.nav}>
        <a className={s.nav_link} href="/courses">курсы</a>
        <a className={s.nav_link} href="/about">о нас</a>
        <a className={s.nav_link} href="/contacts">контакты</a>
      </nav>

    </header>
  )
}

export default Header