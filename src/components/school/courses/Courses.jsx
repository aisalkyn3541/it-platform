import React from 'react';
import './Courses.scss'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const Courses = () => {
    return (
        <div id='body'>
            <div className="container">
                <div className="courses">
                    <div className="courses--text">
                        <h1>
                        Курсы
                        </h1>
                        <div className="courses--text__block">

                            <div className="courses--text__block--one">
                                <h4>Frontend-разработчик</h4>
                                <p>Мастер создания сайтов. Умеет делать
                                     их красивыми, интерактивными, с 
                                     большим функционалом. Профессия 
                                     отлично подойдет тем, кто хочет 
                                     фрилансить и постоянно разрабатывать
                                      новые проекты</p>

                                     <div className="icon">
                                     Подробнее
                                    <BsArrowRight/>
                                     </div>

                            </div>
                            <div className="courses--text__block--one">
                            <h4>Frontend-разработчик</h4>
                                <p>Мастер создания сайтов. Умеет делать
                                     их красивыми, интерактивными, с 
                                     большим функционалом. Профессия 
                                     отлично подойдет тем, кто хочет 
                                     фрилансить и постоянно разрабатывать
                                      новые проекты</p>

                                     <div className="icon">
                                     Подробнее
                                    <BsArrowRight/>
                                     </div>
                            </div>
                            <div className="courses--text__block--one">
                            <h4>Frontend-разработчик</h4>
                                <p>Мастер создания сайтов. Умеет делать
                                     их красивыми, интерактивными, с 
                                     большим функционалом. Профессия 
                                     отлично подойдет тем, кто хочет 
                                     фрилансить и постоянно разрабатывать
                                      новые проекты</p>

                                     <div className="icon">
                                     Подробнее
                                    <BsArrowRight/>
                                     </div>
                            </div>
                        </div>
                        <div className="buttom">
                            <button>Все курсы</button>
                        </div>
                    </div>
                    <div className='kub'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;