import { Link } from 'react-router';
import s from '../styles/NotFound.module.scss';
import setTitle from '../utils/setTitle';

const NotFoundPage = () => {
    setTitle("Страница не найдена");
    return (
        <div className={s.not_found}>
            <h1 className={s.not_found_title}>Ошибка 404: Страница не найдена</h1>
            <p className={s.not_found_text}>
                Упс! К сожалению, мы не можем найти ту страницу, которую вы ищете.
                 Это может быть вызвано тем, что страница была удалена, перемещена
                  или вы ввели неверный адрес. Мы рекомендуем воспользоваться меню
                   выше или перейти на главную страницу, чтобы найти интересующую 
                   вас информацию.
            </p>
            <Link to='/' className={s.not_found_button}>
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFoundPage;
