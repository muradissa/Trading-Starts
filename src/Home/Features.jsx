import React from 'react';
import { ColorModeContext, tokens } from "../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import './features.css'

function Features() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <div className="features-title">
        {/* <div><h1>Features</h1></div> */}
        <h2>Features</h2>
      </div>
      <div className="features">
        <div className="feature feature-1" style={{backgroundColor:"" }}> 
          <img src="../assets/f247.png" alt="Customizable Themes" />
          <div className="feature-details">
            <h3>24/7 automated trading</h3>
            <p>Tradingstars is able to trade 24/7 and offers a demo account so you can see how the platform is performing under current market conditions.</p>
          </div>
        </div>
        <div className="feature feature-2">
          <img src="../assets/fwinrate.png" alt="Customizable Themes" />
          <div className="feature-details">
            <h3>Win Rate +90%</h3>
            <p>The platform claims a win rate of 90% and doesn’t charge any account fees or commissions.</p>
          </div>
        </div>
        
        <div className="feature feature-2">
          <img src="../assets/fai.png" alt="Customizable Themes" />
          <div className="feature-details">   
            <h3>AI algorithm to identify signals</h3>
            <p>TradingStars uses artificial intelligence to identify crypto trading signals.</p>
          </div>
        </div>
        <div className="feature feature-1">
          <img src="../assets/fanalysis.png" alt="Customizable Themes" />
          <div className="feature-details">
            <h3>Pro Cryptocurrency Analysis</h3>
            <p> Tradingstars has the information that you are searching for. The system analyzes several possible currencies for the rally. </p>
          </div>
        </div>
        <div className="feature feature-1">
          <img src="../assets/ffast.png" alt="Customizable Themes" />
          <div className="feature-details">
            <h3>User Accounts</h3>
            <p>Create a free account to save your favorite content, leave comments, and interact with other users.</p>
          </div>
        </div>
        <div className="feature feature-2">
          <img src="../assets/fStrategies.png" alt="Customizable Themes" />
          <div className="feature-details">
            <h3>5 Different Strategies</h3>
            <p>You can choose and change the strategy you want the bot to work with. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

// export default Thirdsection