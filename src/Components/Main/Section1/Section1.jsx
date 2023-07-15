import React from 'react';
import "./Section1.css"
import img from "../../../assets/Group 49.png"
import img2 from "../../../assets/Group 48.png"
import img3 from "../../../assets/Group 47.png"

const Section1 = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="wrapper">
                    <div className="left_block">
                        <h2>О нас</h2>
                        <p>Строительная компания Elite House была основана в 2013 году и является одним из лидеров строительной отрасли Кыргызстана. Компания Elite House не привлекает займы и работает исключительно на собственные средства.
                        </p>
                        <p>По итогам 2019 года компания Elite House была признана «Лучшей компанией по строительству многоэтажных домов премиум-класса в Кыргызстане».</p>
                    </div>

                    <div className="right_block_sect1">
                        <div className="right_first_block">
                            <img src={img} alt="" />
                            <div className="textblock">
                                <h3>1000</h3>
                                <p>И БОЛЕЕ ДОЛЬЩИКОВ</p>
                            </div>
                        </div>
                        <div className="right_second_block">
                            <img src={img2} alt="" />
                            <div className="textblock">
                                <h3>#1</h3>
                                <p>ВЫБОР 2019 ГОДА</p>
                            </div>
                        </div>
                        <div className="right_third_block">
                            <img src={img3} alt="" />
                            <div className="textblock">
                                <h3>7</h3>
                                <p>ЛЕТ НА РЫНКЕ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Section1;