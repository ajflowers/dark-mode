import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const darkMode = window.localStorage.getItem('Dark Mode')
  const lineColor = JSON.parse(darkMode) ? '#f68819' : '#8884d8'
  
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} lineColor={lineColor}/>
        </div>
      ))}
    </div>
  );
};
export default Charts;
