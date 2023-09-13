import React from 'react';
import './Purchase.scss'

const Purchase = () => {
    return (
        <div id='body'>
            <div className="container">
                <div className="purchase">
                    <div className="purchase--text">
                    <h1>Уровень пакетов</h1>
                        <h5>Списания будут автоматическими.
                             Вы всегда можете отменить подписку
                              в Вашем личном кабинете и больше 
                              списаний не будет
                        </h5>
                    </div>
                    <div className="purchase--bloks">
                        <div className="purchase--bloks__one">
                            <div className="purchase--bloks__one--container">
                                <div className="purchase--bloks__one--miniText">
                                    <h4>Месяц +</h4>
                                    <p>Доступны: Все статьи</p>
                                 </div>
                                <div className="purchase--bloks__one--miniText02">
                                    <h4>105,00 $</h4>
                                    <p>Ежемесячно</p>
                                </div>
                                <div className="purchase--bloks__one--button">
                                    <button>Оформить подписку</button>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                        <div className="purchase--bloks__one">
                            <div className="purchase--bloks__one--container">
                                <div className="purchase--bloks__one--miniText">
                                    <h4>Месяц +</h4>
                                    <p>Доступны: Все статьи</p>
                                 </div>
                                <div className="purchase--bloks__one--miniText02">
                                    <h4>105,00 $</h4>
                                    <p>Ежемесячно</p>
                                </div>
                                <div className="purchase--bloks__one--button">
                                    <button>Оформить подписку</button>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                        <div className="purchase--bloks__one">
                            <div className="purchase--bloks__one--container">
                                <div className="purchase--bloks__one--miniText">
                                    <h4>Месяц +</h4>
                                    <p>Доступны: Все статьи</p>
                                 </div>
                                <div className="purchase--bloks__one--miniText02">
                                    <h4>105,00 $</h4>
                                    <p>Ежемесячно</p>
                                </div>
                                <div className="purchase--bloks__one--button">
                                    <button>Оформить подписку</button>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;