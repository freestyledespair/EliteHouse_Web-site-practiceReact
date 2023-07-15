import React from 'react';
import "./Section3.css"
import img from "../../../assets/Group 95.png"
import img3 from "../../../assets/Ellipse 10.png"

const Section3 = () => {
    return (
        <section className="section3">
            <div className="container">
                <h2>Акции</h2>
                <div className="akciidiv">
                    <img src={img} alt="" />
                </div>

                <div className="zerosdiv">
                    <div className='zeroclass'></div>
                    <div className='zeroclass'></div>
                    <div className='zeroclass'></div>
                    <div className='zeroclass'></div>
                    <div className='zeroclass'></div>
                </div>
            </div>
        </section>
    );
};

export default Section3;