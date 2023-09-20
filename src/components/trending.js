import React, { useEffect, useState } from 'react'
import CoinsSection from './trendCoins'
import axios from 'axios'
import logo from '../images/trending.png'

function TrendingCoins() {
    const [coinData, setCoinData] = useState();

    const arrayMap = [0, 1, 2, 4,5]

    const fetchdata = async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/search/trending")
            .catch((error) => {
                console.log(error);
            })
        if (res && res.data) {

            setCoinData(res.data.coins);

        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <>
            <div style={{display:'flex',alignItems:'center', gap:'5px',marginTop:'30px'}}>
                <h1 style={{ color: "#1D5D9B",marginLeft:'80px'}}>Trending Coins</h1>
                <img src={logo} style={{ width: '35px', height: '35px' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>

                {
                    coinData ?
                        arrayMap.map((_, i) => {
                            return <CoinsSection key={i} coinInfo={coinData[i].item} />
                        })

                        : null
                }

            </div>

        </>
    )
}

export default TrendingCoins
