import React from 'react';
import "./Section4.css"
import img from "../../../assets/www1.png"
import img2 from "../../../assets/www2.png"
import img3 from "../../../assets/www3.png"

const Section4 = () => {
    return (
        <section className="section4">
            <div className="container">
                <h2>Медиа</h2>

                <div className="homes_block">
                    <div className="dom1">
                        <img src={img} alt="" />
                        <div className="nameblock">
                            <p class="housename">Новые офисы</p>
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className="date">22.10.2020</p>
                        </div>
                    </div>

                    <div className="dom2">
                        <img src={img2} alt="" />
                        <div className="nameblock">
                            <p class="housename">Новые офисы</p>
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className="date">22.10.2020</p>
                        </div>
                    </div>

                    <div className="dom3">
                        <img src={img3} alt="" />
                        <div className="nameblock">
                            <p class="housename">Новые офисы</p>
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className="date">22.10.2020</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Section4;