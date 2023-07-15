import React from 'react';
import "./Footer.css"
import img from "../../assets/faceb.png"

import img3 from "../../assets/yout.png"
import img4 from "../../assets/Group.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_block">
                    <ul className='footer_menu'>
                        <li>О нас</li>
                        <li>Объекты</li>
                        <li>Онлайн-камеры</li>
                        <li>Новости</li>
                        <li>Медиа</li>
                        <li>Вакансии</li>
                        <li>Забота о клиентах</li>
                    </ul>

                    <ul className='footer_partner'>
                        <li>Управляющая компания</li>
                        <li>Агентская программа</li>
                        <li>Способы оплаты</li>
                        <li>Barter.kg</li>
                        <li>Контакты</li>
                        <li>Офисы продаж</li>
                    </ul>

                    <div className="footer_adress">
                        <div className="adress_info">
                            <p>Адрес:</p>
                            <p>г. Бишкек, ул.</p>
                            <p>ул. Абдрахманова, 170/1,</p>
                            <p>бизнес-центр «Ордо»,</p>
                            <p>7 этаж</p>
                        </div>
                        <div className="adress_img">
                            <img src={img} alt="" />
                            <img src={img3} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>

                    <div className="footer_contacts">
                        <div className="telephone">
                            <p>0 (555) 555 - 555</p>
                            <p>0 (312) 463 - 434</p>
                        </div>
                        <div className="email">
                            <p>E-mail:</p>
                            <p>elithouse@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer_logo">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;