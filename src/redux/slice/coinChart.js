import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchChartData = createAsyncThunk("fetchChartData",async(coinname)=>{
    if(coinname){
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/"+ coinname +"/market_chart?vs_currency=usd&days=30")
        .catch((error)=>{
          console.log(error);
        })
        console.log("chart-data",response.data);
        return response.data;
    }
   
   
  })

const charts  = createSlice({
    name:'coinCharts',
    initialState:{
        isLoading:false,
        chart_data:null,
        isError:false,
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchChartData.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchChartData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.chart_data     = action.payload;
        })
        builder.addCase(fetchChartData.rejected,(state,action)=>{
            state.isError = true;
        })
    }
})

export default charts.reducer;