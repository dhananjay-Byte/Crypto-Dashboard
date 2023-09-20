import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchdata = createAsyncThunk("fetchCoinData",async(coinname)=>{
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + coinname)
    .catch((error)=>{
      console.log(error)
    })
    console.log("response data", response.data);
    return response.data;
})


const Coins = createSlice({
    name:'coin',
    initialState:{
      isLoading:false,
      coin_data:null,
      iSError:false
    },

    extraReducers:(builder)=>{

      builder.addCase(fetchdata.pending,(state,action)=>{
        state.isLoading = true;
      })

      builder.addCase(fetchdata.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.coin_data = action.payload;
      })

      builder.addCase(fetchdata.rejected,(state,action)=>{
        state.iSError = true;
      })

    }
})

export default Coins.reducer;