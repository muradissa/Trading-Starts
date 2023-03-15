// import React from 'react'

// function Secondsection() {
//   return (
//     <div>Secondsection - About 
//       <p><b>This is the best Bot for Automatic Trading On Cryptocurrencies.</b>

//         Emotions often play tricks on you and make you lose a lot of money.

//         Controlling your emotions is the key to profitable trading.

//         </p>
//         <p>
//         Automated trading robots make it possible to trade crypto, stocks, forex, and more, all without putting in endless hours of analysis on your own. These platforms are designed to recognize potentially profitable setups in the market and then execute trades automatically on your behalf.

//         Trading robots aren’t completely effort-free, but they can make it much easier for beginner traders to profit from the market. In this guide, we’ll review the 11 best trading robots in 2023 and explain how you can start using a trading bot today.
//         </p>
//     </div>
//   )
// }

// export default Secondsection

////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 100px 0;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 50px;
// `;

// const Description = styled.p`
//   font-size: 1.2rem;
//   max-width: 800px;
//   text-align: center;
//   margin-bottom: 50px;
// `;

// const FeatureList = styled.ul`
//   list-style-type: none;
//   display: flex;
//   justify-content: space-around;
//   max-width: 800px;
// `;

// const Feature = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Icon = styled.img`
//   width: 100px;
//   margin-bottom: 20px;
// `;

// const FeatureTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
//   text-align: center;
// `;

// const FeatureDescription = styled.p`
//   text-align: center;
// `;

// const AboutUs = () => {
//   return (
//     <Wrapper>
//       <Title>About Our Trading Bot</Title>
//       <Description>
//         Our trading bot is an advanced algorithmic trading tool designed to help traders make better decisions and improve their profitability. With features like real-time market analysis, automated trade execution, and risk management tools, our bot gives traders an edge in the fast-paced world of crypto trading.
//       </Description>
//       <FeatureList>
//         <Feature>
//           <Icon src="real-time-analysis.png" alt="Real-time analysis icon" />
//           <FeatureTitle>Real-Time Analysis</FeatureTitle>
//           <FeatureDescription>Our bot continuously analyzes market data in real time to identify potential trading opportunities and trends.</FeatureDescription>
//         </Feature>
//         <Feature>
//           <Icon src="automated-trading.png" alt="Automated trading icon" />
//           <FeatureTitle>Automated Trading</FeatureTitle>
//           <FeatureDescription>Our bot can automatically execute trades based on predefined criteria, reducing the need for manual intervention.</FeatureDescription>
//         </Feature>
//         <Feature>
//           <Icon src="risk-management.png" alt="Risk management icon" />
//           <FeatureTitle>Risk Management</FeatureTitle>
//           <FeatureDescription>Our bot includes advanced risk management tools to help traders minimize their exposure and protect their capital.</FeatureDescription>
//         </Feature>
//       </FeatureList>
//     </Wrapper>
//   );
// };

// export default AboutUs;
// In this example, we use styled-components to create a modern, responsive design for the AboutUs component.

// The Wrapper component is a container that centers its children vertically and horizontally. The Title and Description components provide an overview of the trading bot and its features, respectively. The FeatureList component is a horizontal list of Feature components, each of which represents a key feature of the bot.

// Each Feature component includes an Icon component, a FeatureTitle component, and a FeatureDescription component. The Icon component displays an icon related to the feature, while the FeatureTitle and FeatureDescription components provide a brief description of the feature.

// Overall, this design provides a clean, organized layout that highlights the key features of the trading bot in a visually appealing way. The use of icons and concise descriptions makes the information easy to scan and understand, while the use of styled components ensures a consistent look and

import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

// const Wrapper = styled(animated.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 100px 0;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 50px;
// `;

// const Description = styled(animated.p)`
//   font-size: 1.2rem;
//   max-width: 800px;
//   text-align: center;
//   margin-bottom: 50px;
// `;

// const FeatureList = styled(animated.ul)`
//   list-style-type: none;
//   display: flex;
//   justify-content: space-around;
//   max-width: 800px;
// `;

// const Feature = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Icon = styled.img`
//   width: 100px;
//   margin-bottom: 20px;
// `;

// const FeatureTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
//   text-align: center;
// `;

// const FeatureDescription = styled.p`
//   text-align: center;
// `;

// const AboutUs = () => {
//   const titleAnimation = useSpring({ 
//     from: { opacity: 0, transform: 'translateY(-50px)' },
//     to: { opacity: 1, transform: 'translateY(0px)' },
//     delay: 500,
//   });

//   const descAnimation = useSpring({ 
//     from: { opacity: 0, transform: 'translateY(-50px)' },
//     to: { opacity: 1, transform: 'translateY(0px)' },
//     delay: 1000,
//   });

//   const featureAnimation = useSpring({ 
//     from: { opacity: 0, transform: 'translateY(50px)' },
//     to: { opacity: 1, transform: 'translateY(0px)' },
//     delay: 1500,
//   });
const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  @media (min-width: 768px) {
    margin: 100px 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const Description = styled(animated.p)`
  font-size: 1.2rem;
  max-width: 800px;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const FeatureList = styled(animated.ul)`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
`;

const Feature = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 300px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
    width: 350px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const Icon = styled.img`
  width: 80px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 100px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

const FeatureDescription = styled.p`
  text-align: center;
`;

const AboutBot = () => {
  const titleAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  const descAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 1000,
  });

  const featureAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 1500,
  });

  return (
    <Wrapper>
      <Title style={titleAnimation}>About Our Trading Bot</Title>
      <Description style={descAnimation}>
        Our trading bot is an advanced algorithmic trading tool designed to help traders make better decisions and improve their profitability. With features like real-time market analysis, automated trade execution, and risk management tools, our bot gives traders an edge in the fast-paced world of crypto trading.
      </Description>
      <FeatureList style={featureAnimation}>
        <Feature>
          <Icon src="../assets/real-time-analysis2.png" alt="Real-time analysis icon" />
          <FeatureTitle>Real-Time Analysis</FeatureTitle>
          <FeatureDescription>Our bot continuously analyzes market data in real time to identify potential trading opportunities and trends.</FeatureDescription>
        </Feature>
        <Feature>
          <Icon src="../assets/automated-trading.png" alt="Automated trading icon" />
          <FeatureTitle>Automated Trading</FeatureTitle>
          <FeatureDescription>Our bot can automatically execute trades based on predefined criteria, reducing the need for manual intervention.</FeatureDescription>
        </Feature>
        <Feature>
          <Icon src={`../assets/risk-management3.png`} alt="Risk management icon" style={{color:"white"}}/>
          <FeatureTitle>Risk Management</FeatureTitle>
          <FeatureDescription>Our bot includes advanced risk management tools to help traders minimize their exposure and protect their capital.</FeatureDescription>
        </Feature>
      </FeatureList>
    </Wrapper>
  );
};

export default AboutBot;




