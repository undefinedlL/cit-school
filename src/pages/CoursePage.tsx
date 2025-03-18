import { FC, useState } from 'react';
import { useParams } from 'react-router';
import courses from '../utils/courses';
import s from '../styles/Course.module.scss'
import setTitle from '../utils/setTitle';

const CoursePage: FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const course = courses.find(course => course.id === Number(id)); 
  let   courseDetails;
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  if (course) {
    setTitle(course.title);
    courseDetails = [
      { label: "Категория", value: course.category },
      { label: "Формат", value: course.format },
      { label: "Учебные часы", value: course.academic_hours },
      { label: "Расписание", value: course.schedule },
      { label: "Частота занятий", value: course.classes_frequency },
      { label: "Продолжительность модуля", value: course.module_duration },
      { label: "Целевая аудитория", value: course.target_audience }
    ];
    courseDetails = courseDetails.map((item, index) => (
      <p key={index}>
        <strong>{item.label}:</strong> {item.value}</p>
    ));
  }

  if (!course) {
    setTitle("Курс не найден");
    return <div className={s.no_course}>
      <h1 className={s.no_course_title}>
        Курс не найден &#128533;</h1>
      <a href="/courses" className={s.no_course_link}>
      Перейти на страницу с курсами</a>
    </div>; 
  }

  const sendRequest = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name != "" && phone != "") {
      alert("Заявка отправлена!");
      setName("");
      setPhone("");
    }
  }

  return (
    <>
      <div className={s.course}>
        <button onClick={() => window.history.back()} 
        className={s.back_button}>
          Назад к курсам</button>
        <div className={s.intro}>
            <h1 className={s.intro_title}>{course.title}</h1>
            <img src={course.icon} alt={`${course.title} icon`} 
            className={s.intro_icon} />
        </div>
        <div className={s.details}>
            {courseDetails}
            <div className={s.details_themes}>
                <h2 className={s.details_themes_title}>Темы курса:</h2>
                <ul className={s.details_themes_list}>
                    {course.themes.map((theme, index) => (
                        <li key={index}>{theme}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      
      <form className={s.form} onSubmit={sendRequest}>
          <h2 className={s.form_title}>Оставьте заявку на курс</h2>
          <div className={s.form_input}>
            <label htmlFor="name">Имя:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name} 
              onChange={e => setName(e.target.value)} required />
          </div>
          <div className={s.form_input}>
            <label htmlFor="phone">Телефон:</label>
            <input  
              type="tel" 
              id="phone" 
              name="phone" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} required />
          </div>
          <button type="submit" className={s.form_button}>Отправить заявку</button>
      </form>
    </>
  );
}

export default CoursePage;