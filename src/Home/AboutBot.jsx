import './aboutbot.css';

const AboutBot = () => {
  return (
    <div className="aboutbot-wrapper">
      <h2 className="aboutbot-title">About Our Trading Bot</h2>
      <p className="aboutbot-description">
        Our trading bot is an advanced algorithmic trading tool designed to help traders make better decisions and improve their profitability. With features like real-time market analysis, automated trade execution, and risk management tools, our bot gives traders an edge in the fast-paced world of crypto trading.
      </p>
      <ul className="aboutbot-feature-list">
        <li className="aboutbot-feature">
          <img src="../assets/real-time-analysis2.png" alt="Real-time analysis icon" className="aboutbot-icon" />
          <h3 className="aboutbot-feature-title">Real-Time Analysis</h3>
          <p className="aboutbot-feature-description">Our bot continuously analyzes market data in real time to identify potential trading opportunities and trends.</p>
        </li>
        <li className="aboutbot-feature">
          <img src="../assets/automated-trading.png" alt="Automated trading icon" className="aboutbot-icon" />
          <h3 className="aboutbot-feature-title">Automated Trading</h3>
          <p className="aboutbot-feature-description">Our bot can automatically execute trades based on predefined criteria, reducing the need for manual intervention.</p>
        </li>
        <li className="aboutbot-feature">
          <img src="../assets/risk-management3.png" alt="Risk management icon" className="aboutbot-icon" />
          <h3 className="aboutbot-feature-title">Risk Management</h3>
          <p className="aboutbot-feature-description">Our bot includes advanced risk management tools to help traders minimize their exposure and protect their capital.</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutBot;