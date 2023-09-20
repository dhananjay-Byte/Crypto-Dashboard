import {configureStore} from '@reduxjs/toolkit'
import coinReducer from './slice/coinData'
import chartReducer from './slice/coinChart'
export const store = configureStore({
    reducer:{
        coin : coinReducer,
        coinCharts:chartReducer
    }
})