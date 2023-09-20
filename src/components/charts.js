import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchChartData } from '../redux/slice/coinChart';
import Chart from "react-apexcharts";

function ChartData() {
    const coinInfo = useSelector((state) => state.coin);
    const charts = useSelector((state) => state.coinCharts);
    const dispatch = useDispatch();


    const [chartData, setChartData] = useState({
        Price: {
            options: {
                chart: {
                    id: 'area-datetime',
                },
                grid: {
                    show: false
                }, title: {
                    text: "Market Price (USD)",
                    style: {
                        fontSize: '20px', fontWeight: 'bold', color: "#1D5D9B"
                    }
                }, stroke: {
                    curve: 'smooth'
                }, xaxis: {
                    type: "datetime"
                }, dataLabels: {
                    enabled: false
                }, yaxis: {
                    show: false
                }, colors: ["#1D5D9B"],
                tooltip: {
                    y: {
                        formatter: (value) => { return value.toFixed(2) }
                    }, theme: "dark"
                }, selection: 365,
            },
            series: [
                {
                    name: 'Market Price',
                    data: [[1645837250522, 39804.53519937617]]

                }
            ]
        }
        , Market_Cap: {
            options: {
                grid: {
                    show: false
                }, title: {
                    text: "Market Cap (USD)",
                    style: {
                        fontSize: '20px', fontWeight: 'bold', color: '#64CCC5'
                    }
                }, stroke: {
                    curve: 'smooth'
                }, xaxis: {
                    type: "datetime"
                }, dataLabels: {
                    enabled: false
                }, yaxis: {
                    show: false
                }, colors: ["#64CCC5"],
                tooltip: {
                    y: {
                        formatter: (value) => { return value.toFixed(2) }
                    }, theme: "dark"
                }
            },
            series: [
                {
                    name: 'Market Cap (USD)',
                    data: [[1645837250522, 39804.53519937617]]

                }
            ]
        }
        ,
        Tot_Vol: {
            options: {
                grid: {
                    show: false
                }, title: {
                    text: "Market Volume",
                    style: {
                        fontSize: '20px', fontWeight: 'bold', color: "#176B87"
                    }
                }, stroke: {
                    curve: 'smooth'
                }, xaxis: {
                    type: "datetime"
                }, dataLabels: {
                    enabled: false
                }, yaxis: {
                    show: false
                }, colors: ["#176B87"],
                tooltip: {
                    y: {
                        formatter: (value) => { return value.toFixed(2) }
                    }, theme: "dark"
                },
            },
            series: [
                {
                    name: "Market Volume",
                    data: [[1645837250522, 39804.53519937617]]

                }
            ]
        }
    })


    useEffect(() => {
        if (coinInfo.coin_data && coinInfo.coin_data.length!==0) dispatch(fetchChartData(coinInfo.coin_data[0].id));
    }, [coinInfo])

    useEffect(() => {
        if (charts.chart_data) {
            setChartData({
                Price: { options: chartData.Price.options, series: [{ name: 'Market Price', data: charts.chart_data.prices }] },
                Market_Cap: { options: chartData.Market_Cap.options, series: [{ name: 'Market Capital', data: charts.chart_data.market_caps }] },
                Tot_Vol: { options: chartData.Tot_Vol.options, series: [{ name: 'Market Volume', data: charts.chart_data.total_volumes }] }
            })
        }

    }, [charts.chart_data])

    return (
        <section style={{marginTop:'40px'}}>
            {
                (coinInfo.coin_data && coinInfo.coin_data.length!==0 && charts.chart_data) ?
                    <div style={{display:'flex',justifyContent:"center",gap:'100px'}}>
                        <div id='chart'>
                            <Chart options={chartData.Price.options}
                                series={chartData.Price.series}
                                type="area"
                                height='500'
                                width='800' />
                        </div>

                        <div style={{display:'flex',flexDirection:'column',gap:'80px'}}>
                            <div id='chart'>
                                <Chart options={chartData.Market_Cap.options}
                                    series={chartData.Market_Cap.series}
                                    type="area"
                                    height='200'
                                    width='400' />
                            </div>

                            <div id='chart'>
                                <Chart options={chartData.Tot_Vol.options}
                                    series={chartData.Tot_Vol.series}
                                    type="line"
                                    height='200'
                                    width='400' />
                            </div>

                        </div>

                    </div> : null
            }

        </section>
    )
}

export default ChartData

