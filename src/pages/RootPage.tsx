import { FC } from "react";
import setTitle from "../utils/setTitle";
import s from '../styles/Root.module.scss';
import { PiBooksLight, PiCertificateLight } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import courses from "../utils/courses";
import { Link } from "react-router";

const RootPage: FC  = () => {
  const items = [courses[0], courses[1], courses[2]];
  
  setTitle("CIT курсы");

  return (
    <>
      <div className={s.hero}>
        <div className={s.hero_content}>
          <h1 className={s.hero_title}>
          Добро пожаловать в Cit: Откройте Новые Горизонты Знаний
          </h1>
          <h3 className={s.hero_content_subtitle}>
          Мы предлагаем инновационные курсы, адаптированные под 
          потребности современного мира, чтобы вы могли достичь своих целей 
          и реализовать потенциал.
          </h3>
        </div>
      </div>
      
      <div className={s.benefits}>
        <h2 className={s.benefits_title}>Почему выбирают нас?</h2>
        <div className={s.benefits_content}>
          <div className={s.benefits_item}>
            <PiCertificateLight className={s.benefits_item_icon} />
            <h3 className={s.benefits_item_title}>Качество образования</h3>
            <p className={s.benefits_item_description}>Мы работаем только с опытными 
            преподавателями, которые отлично знают свои предметы.</p>
          </div>
          <div className={s.benefits_item}>
            <PiBooksLight className={s.benefits_item_icon} />
            <h3 className={s.benefits_item_title}>Индивидуальный подход</h3>
            <p className={s.benefits_item_description}>Мы адаптируем курсы под нужды
            студентов и поддерживаем их на протяжении обучения.</p>
          </div>
          <div className={s.benefits_item}>
            <MdOutlineSchool className={s.benefits_item_icon} />
            <h3 className={s.benefits_item_title}>Курсы по подготовке к ОГЭ и ЕГЭ</h3>
            <p className={s.benefits_item_description}>Предлагаем специальные программы
            для уверенной подготовки к экзаменам.</p>
          </div>
        </div>
      </div>

      <div className={s.courses}>
        <h1 className={s.courses_title}>Наши курсы</h1>
        <div className={s.courses_content}>
          {items.map(course => (
            <div className={s.courses_item} key={course.id}>
            <h3 className={s.courses_item_title}>{course.title}</h3>
            <img src={course.icon} alt={course.title} />
            <Link to={`/courses/${course.id}`} className={s.courses_item_link}>перейти к курсу</Link>
          </div>
          ))}
        </div>
        <Link to="/courses" className={s.courses_link}>Посмотреть все</Link>
      </div>
      
      <div className={s.cta}>
      <hr />
        <h1 className={s.cta_title}>
          Запишитесь на курс и начните свой путь к успеху уже сегодня!
        </h1>
        <Link to="/courses" className={s.cta_link}>Записаться на курс</Link>
      </div>
    </>
  )
}

export default RootPage;