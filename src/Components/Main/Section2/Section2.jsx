import React from 'react';
import "./Section2.css"
import img from "../../../assets/Fasad_v3_c08 1 -1-.png"
import img2 from "../../../assets/Union.png"
import img3 from '../../../assets/Fasad_v3_c08 1 -2-.png'
import img4 from '../../../assets/Group 159.png'
import img5 from "../../../assets/Fasad_v3_c08 1 -3-.png"
import img6 from "../../../assets/Fasad_v3_c08 1 -4-.png"
import img7 from "../../../assets/Union -1-.png"
import img8 from "../../../assets/Fasad_v3_c08 1 -3-.png"
import img9 from "../../../assets/Fasad_v3_c08 1 -6-.png"

const Section2 = () => {
    return (
        <div className="container">
            <section className="section2">
                <div className="title_block">
                    <h2>Объекты</h2>
                    <div className="obj_categories">
                        <div className="obj">Новые</div>
                        <div className="obj">Строящиеся</div>
                        <div className="obj">Завершенные</div>
                    </div>
                </div>

                <div className="homes_block">
                    <div className="dom1">
                        <img src={img} alt="" />
                        <div className="nameblock">
                            <p class="housename">Александрия</p>
                            <img src={img2} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул.Токтогула/Исанова</p>
                        </div>
                    </div>

                    <div className="dom2">
                        <img src={img3} alt="" />
                        <div className="nameblock">
                            <p class="housename">Эль Классик</p>
                            <img src={img4} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул. Коенкозова/ул. Чуйкова</p>
                        </div>
                    </div>

                    <div className="dom3">
                        <img src={img5} alt="" />
                        <div className="nameblock">
                            <p class="housename">Эль Классик Плюс</p>
                            <img src={img4} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул.Коенкозова/Чуйкова</p>
                        </div>
                    </div>

                    <div className="dom4">
                        <img src={img6} alt="" />
                        <div className="nameblock">
                            <p class="housename">Итальянский квартал</p>
                            <img src={img7} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул.С.Батора/А.Токомбаева</p>
                        </div>
                    </div>

                    <div className="dom5">
                        <img src={img8} alt="" />
                        <div className="nameblock">
                            <p class="housename">Асанбай ордо</p>
                            <img src={img7} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул.С.Батора/А.Токомбаева</p>
                        </div>
                    </div>

                    <div className="dom6">
                        <img src={img9} alt="" />
                        <div className="nameblock">
                            <p class="housename">Континенталь</p>
                            <img src={img2} alt="" />
                        </div>
                        <hr width={323} className="hrka" />
                        <div className='nameblock_2'>
                            <p class="adress-of-house">ул. Элебаева/Кулатова</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section2;