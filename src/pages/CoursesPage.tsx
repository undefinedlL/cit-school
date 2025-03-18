import { FC, useState } from "react";
import setTitle from "../utils/setTitle";
import courses from "../utils/courses";
import { Link } from "react-router";
import s from '../styles/Courses.module.scss'

const CoursesPage: FC = () => {
  setTitle("Все курсы");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || course.category === selectedCategory)
  );

  return (
    <>
      <h1 className={s.title}>Наши курсы</h1>
      
      <div className={s.filter}>
        <input 
          type="text" 
          placeholder="Поиск курсов..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className={s.filter_search}
        />
        <select value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                className={s.filter_category}>
          <option value="">Все категории</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className={s.container}>
        {filteredCourses.length ? (
          filteredCourses.map((course) => (
            <div key={course.id} className={s.card}>
              <h2 className={s.card_title}>{course.title}</h2>
              <img className={s.card_icon} src={course.icon} alt={course.title} />
              <Link to={`${course.id}`} className={s.card_link}>
              Перейти к курсу</Link>
            </div>
          ))
        ) : (
          <h1 className={s.subtitle}>Курсы не найдены &#128533;</h1>
        )}
      </div>   
    </>
  );
}

export default CoursesPage;