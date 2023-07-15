import React from 'react';
import "./Section5.css"
import img from "../../../assets/Снимок экрана 2020-02-28 в 14.08 1.png"
import img2 from "../../../assets/Group 97.png"
import img3 from "../../../assets/Frame.png"

const Section5 = () => {
    return (
        <section className="section5">
            <div className="container">
                <h2>Наши офисы</h2>
            </div>
            <div className="karta_block">
                <img src={img} alt="" />
                <img id="posit" src={img2} alt="" />
                <img id="frame1" src={img3} alt="" />
                <img id="frame2" src={img3} alt="" />
                <img id="frame3" src={img3} alt="" />
                <img id="frame4" src={img3} alt="" />
            </div>

        </section>
    );
};

export default Section5;