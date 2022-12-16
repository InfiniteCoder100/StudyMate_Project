import React from 'react'
import './Pricing.css'
import { pricingData } from './PricingData'

const Pricing = () => {
    return (
        <>
            <div className="price" id="price">
                <div className="price-title">
                    <span className="p-title1">Our</span>
                    <h2 className="p-title2">Pricing & Packages</h2>
                </div>
                <div className="price-container">
                    {pricingData.map((item) => (
                        <div className="price-box" key={item.id}>
                            <h4 className="p-plan">{item.plan} </h4>
                            <h1 className="p-amount">
                                <span>$</span>
                                {item.price}K</h1>
                            <p className="p-desc">{item.desc} </p>
                            <button className="price-btn">{item.button} </button>
                        </div>
                    ))}

                </div>
                
            </div>
        </>
    )
}

export default Pricing
