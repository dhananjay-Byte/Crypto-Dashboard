import React from 'react'
import { useSelector } from 'react-redux'
import './coinDetails.css'

function CoinDetails() {

  const coinInfo = useSelector((state) => state.coin);
  if (coinInfo.coin_data === null) {
    console.log("coins info", coinInfo)
  }


  return (
    <section>
      {
        (coinInfo.coin_data && coinInfo.coin_data.length !== 0) ?
          (
            <div className='wrapper'>
              <div className='profile'>
                <img style={{ width: '200px', height: '200px' }} src={coinInfo.coin_data[0].image} />
                <span>
                  <h1 style={{ fontSize: '80px' }}>{coinInfo.coin_data[0].id}</h1>
                  <h2 style={{ fontSize: '40px' }} className='coinSymbol'>({coinInfo.coin_data[0].symbol})</h2>
                </span>

                <div className="extra-info">

                  <li><span style={{ color: '#1D5D9B' }}>All Time High (ath):</span>  {coinInfo.coin_data[0].ath}$</li>
                  <li><span style={{ color: '#1D5D9B' }}>All Time Low (atl):</span>   {coinInfo.coin_data[0].high_24h}$</li>
                  <li><span style={{ color: '#1D5D9B' }}>Price Change in 24H:</span>   {coinInfo.coin_data[0].price_change_24h}$</li>
                  <li><span style={{ color: '#1D5D9B' }}>Circulating Supply:</span>   {coinInfo.coin_data[0].circulating_supply}</li>
                </div>

              </div>

              <div className='coinprice'>
                <h2 className='price'><span style={{ color: '#1D5D9B' }}>Current Price: </span>{coinInfo.coin_data[0].current_price}<span style={{ color: 'green' }}>$</span></h2>
              </div>

              <div className='profileData'>
                <li><span style={{ color: '#1D5D9B' }}>High 24hour</span>{coinInfo.coin_data[0].high_24h}$</li>
                <li><span style={{ color: '#1D5D9B' }}>Low 24hour</span>{coinInfo.coin_data[0].low_24h}$</li>
                <li style={{ backgroundColor: '#1D5D9B', color: 'white' }}><span style={{ color: 'white' }}>Market Rank</span>{coinInfo.coin_data[0].market_cap_rank}</li>
                <li><span style={{ color: '#1D5D9B' }}>Market Change</span>{coinInfo.coin_data[0].market_cap_change_percentage_24h}%</li>
                <li><span style={{ color: '#1D5D9B' }}>Total Volume</span>{coinInfo.coin_data[0].total_volume}</li>
              </div>

            </div>

          ) : null
      }

      {
        coinInfo.coin_data && coinInfo.coin_data.length === 0 &&
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'40px'}}>
          <h4>This Coin is not Listed or does not exist.</h4>
        </div>
      }

    </section>

  )
}

export default CoinDetails