import { FC } from "react"
import s from '../../styles/Footer.module.scss'
import Logo from "./Logo"
import { FaOdnoklassniki} from "react-icons/fa6"
import { IoLogoVk } from "react-icons/io"
import { RiTelegram2Fill } from "react-icons/ri"
import { Link } from "react-router"

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_nav}>
          <div><Logo /></div>
          <div className={s.footer_quick_links}>
            <h3>Быстрые ссылки</h3>
            <Link to="contacts">Контакты</Link>
            <Link to="about">О нас</Link>
          </div>
        </div>
        <div className={s.footer_socials}>
          <a><IoLogoVk /></a>
          <a><FaOdnoklassniki /></a>
          <a><RiTelegram2Fill /></a>
        </div>
      </div>
      <hr />
      <div className={s.footer_copyrights}>
        Все права защищены. &copy; 2025 
      </div>
    </footer>
  )
}

export default Footer