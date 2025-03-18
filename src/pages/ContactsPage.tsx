import { FC } from "react";
import setTitle from "../utils/setTitle";
import s from '../styles/ContactsAndAbout.module.scss'

const ContactsPage: FC = () => {

  setTitle("Контакты");

  return (
    <div className={s.container}>
      <h1 className={s.title}>Контакты</h1>
    <p className={s.text}>
      Если у вас есть вопросы, предложения или вы хотите узнать больше 
      об обучении в нашем центре, не стесняйтесь обращаться к нам. 
      Мы рады помочь!
    </p>
    <div>
        <p className={s.text}>
        &#128222; Телефон: <a href="telto:">+7(000)000-00-00</a> 
        </p>
    </div>
    <div>
        <p className={s.text}>
        &#128231; Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
    </div>
    </div>
  )
}
export default ContactsPage;