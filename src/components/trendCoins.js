import React from 'react';
import './trendCoins.css'

function CoinsSection({coinInfo}) {
    return (
       
        <section className='Coin-container'>
            <div style={{display:"flex",flexDirection:"row",alignItems:'center',gap:'30px'}}>
                <img style={{width:'100px',height:'100px'}} src={coinInfo.large}></img>
                <h4>{coinInfo.symbol}</h4>
            </div>
            <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
                <h4>{coinInfo.name}</h4>
                
                <span style={{fontWeight:'700'}}>Market Cap Rank: {coinInfo.market_cap_rank}</span>
                <span style={{fontWeight:'400'}}> Price: {coinInfo.price_btc} btc </span>
            </div>  
        </section>

    );
}

export default CoinsSection;

