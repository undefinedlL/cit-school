import { FC } from 'react';
import setTitle from '../utils/setTitle';
import s from '../styles/ContactsAndAbout.module.scss'

const AboutPage: FC = () => {

  setTitle("О нас");

  return (
   <div className={s.container}>
     <h1 className={s.title}>О нас</h1>
      <p className={s.subtitle}>Мы помогаем вам развивать ваши навыки!</p>
      <p className={s.text}>
        Наша компания стремится предоставить качественные образовательные курсы, которые помогут вам
        достичь ваших целей и развить необходимые навыки для успешной карьеры.
      </p>

      <p className={s.text}>
        Почему выбирают нас? Мы предлагаем:
      </p>
      <ul className={s.benefits}>
        <li>Опытные преподаватели с практическим опытом</li>
        <li>Гибкий график обучения и доступ к материалам 24/7</li>
        <li>Индивидуальный подход к каждому студенту</li>
        <li>Современные методики и актуальные темы курсов</li>
      </ul>
   </div>
  )
}

export default AboutPage;