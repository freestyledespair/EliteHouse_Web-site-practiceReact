import React from 'react';
import "./Header.css"
import img from "../../assets/elite-house-logo.png"
import img2 from "../../assets/Vector.png"
import img3 from "../../assets/Vector11.png"
import img4 from "../../assets/Vector11.png"
import img5 from "../../assets/Vector11.png"
import img_online from "../../assets/Group 287.png"
// import img_zayavka from "../../assets/Group 203.png"
import img_zayavka from "../../assets/Rectangle 74.png"


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper_header">
                    <div className="header_block_menu">
                        <div className="logo">
                            <img width={80} src={img} alt="" />
                        </div>
                        <nav>
                            <ul className="menu">
                                <li>О нас</li>
                                <li>Объекты</li>
                                <li>Новости</li>
                                <li>Забота о клиентах</li>
                                <li>Оплата</li>
                                <li>Контакты</li>
                            </ul>
                        </nav>
                        <div className="right_block">
                            <p>Ru</p>
                            <img width={18} height={18} src={img2} alt="" />
                            <img width={18} height={18} src={img3} alt="" />
                            <img width={18} height={18} src={img4} alt="" />
                            <img width={18} height={18} src={img5} alt="" />
                            <p className='number_tel'>0555 555 555</p>
                        </div>
                    </div>


                    <div className="header_block_zayavka">
                        <img src={img_online} alt="" />
                        {/* <img src={img_zayavka} alt="" /> */}
                        <div className='zayavka_block'>
                            <div className="palochki_block">
                                <div className="palochki"></div>
                                <div className="palochki"></div>
                                <div className="palochki"></div>
                            </div>
                            <h4 className="zayavka">Оставить заявку</h4>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;