import React from 'react';
import './Pricing.css';

const Pricing2 = () => {
  return (
    <div className="pricing-container">
        <h2>Subscribe</h2>
        <div className="pricing-container-cards">
        
        <div className="pricing-card free">
            <div className="pricing-title">Free Plan</div>
            <div className="pricing-subtitle">Try us out with basic features</div>
            <div className="pricing-price">$0/month</div>
            <ul className="pricing-features">
                <li>Access to basic trading automation features</li>
                <li>1 trading bot</li>
                <li>Limited customer support</li>
            </ul>
            <button className="pricing-button">Get started</button>
        </div>

        <div className="pricing-card">
            <div className="pricing-title">Basic Plan</div>
            <div className="pricing-subtitle">Get started with the essentials</div>
            <div className="pricing-price">$19.99/month</div>
            <ul className="pricing-features">
                <li>Access to basic trading automation features</li>
                <li>Up to 3 trading bots</li>
                <li>24/7 customer support</li>
                <li>Backtesting and paper trading</li>
                <li>Simultaneous multi-exchange trading</li>
            </ul>
            <button className="pricing-button">Get started</button>
        </div>

        <div className="pricing-card popular">
            <div className="pricing-title">Pro Plan</div>
            <div className="pricing-subtitle">Upgrade to advanced features</div>
            <div className="pricing-price">$49.99/month</div>
            <ul className="pricing-features">
                <li>Access to all trading automation features</li>
                <li>Up to 10 trading bots</li>
                <li>24/7 priority customer support</li>
                <li>Advanced order types and risk management</li>
                <li>Portfolio rebalancing and tax loss harvesting</li>
                <li>Strategy backtesting and optimization</li>
            </ul>
            <button className="pricing-button">Get started</button>
        </div>

        <div className="pricing-card">
            <div className="pricing-title">Premium Plan</div>
            <div className="pricing-subtitle">Get the ultimate trading automation experience</div>
            <div className="pricing-price">$99.99/month</div>
            <ul className="pricing-features">
            <li>Access to all trading automation features</li>
            <li>Unlimited trading bots</li>
            <li>24/7 VIP customer support</li>
            <li>Customizable alerts and notifications</li>
            <li>Advanced portfolio analytics and reporting</li>
            <li>Dedicated account manager and onboarding</li>
            </ul>
            <button className="pricing-button">Get started</button>
        </div>
        </div>
    </div>
  );
};

export default Pricing2;
