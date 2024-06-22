'use client'
import React from 'react'
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJs.register(ArcElement,Tooltip,Legend);

const DonutChart = ({accounts}:{accounts:DoughnutChartProps}) => {
    const data = {
        datasets:[
            {
                label: 'Banks',
                data:[1250,2500,3750],
                backgroundColor:['#0747b66','#2265d8','#2f91fa']
            }
        ],
        labels:['Bank1','Bank2','Bank 3']
    }
  return (
<>
   <Doughnut data={data}
   options={{
    cutout:'60%',
    plugins:{
        legend:{
            display:false
        }
    }
   }}
   />

   </>
  )
}

export default DonutChart
