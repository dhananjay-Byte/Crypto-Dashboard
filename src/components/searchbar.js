import React, { useState } from 'react'
import {useDispatch,} from 'react-redux'
import { fetchdata } from '../redux/slice/coinData'

import './searchbar.css'

function SearchBar() {
  const dispatch = useDispatch()
  const [coinName,setCoinName] = useState();


  return (
    <div className='search-bar'>
        <input  className='textfield' value={coinName} onChange={e=>setCoinName(e.target.value)} type='text' placeholder='Enter Coin Name' />
        {coinName && <button onClick={()=>dispatch(fetchdata(coinName))} className='searchButton'>Search</button>}
    </div>
  )
}

export default SearchBar