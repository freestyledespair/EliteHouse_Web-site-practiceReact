import React from 'react';
import "./Section6.css"
import img from "../../../assets/Group 162.png"

const Section6 = () => {
    return (
        <section className="section6">
            <div className="container">
                <h2>Партнёры</h2>
                <div className="barter_block">
                    <div className='barter_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='barter_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='barter_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='barter_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='barter_img'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;