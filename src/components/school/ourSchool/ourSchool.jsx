import React from 'react';
import './OurSchool.scss'
import img from "../img/web_development_banner 1people.png"

const OurSchool = () => {
    return (    
        <div id='body'>
            <div className='container'>
                <div className='OurSchool'>
                    <div className="school">
                        <div className="school--first">
                    <h1>
                        <span>
                            Главная /
                        </span>
                            О школе
                    </h1>
                        </div>
                        <div className='school--text'>
                            <div className='school--text__one'>
                                <h1 className='aaaa'>О нашей школе:</h1>
                                <p className='oooo'>Наша платформа — это интенсивная программа обучения
                                     для тех, кто хочет освоить востребованную профессию,
                                      войти в IT и зарабатывать больше.</p>
                            </div>
                            <div className='school--text__one'>
                                <h1 className='aaaa'>Наша миссия:</h1>
                                <p className='oooo'>Сформировать интерес к современным 
                                    технологиям и помочь школьнику определиться с выбором 
                                    будущей специальности.</p>
                            </div>
                        </div>
                    </div>
                    <img src={img} alt="" />        
                </div>
            </div>
         </div>
    );
};

export default OurSchool;