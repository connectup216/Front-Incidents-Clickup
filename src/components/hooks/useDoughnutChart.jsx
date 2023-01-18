import { useEffect, useState } from 'react';

import { useGetIncidentsInfo } from '../../hooks/useGetIncidentsInfo';
import { percentageFormatter } from '../../utils/percentageFormatter';

export const useDoughnutChart = ( onTasks = () => '' ) => {
    const { tasks, isLoading, getTasksReq,} = useGetIncidentsInfo();

    const [ chartData, setChartData ] = useState('')
    const [ graphData, setGraphData ] = useState({
        labels: null,
        data: null
    });

    useEffect(() => {getTasksReq()}, [])

    useEffect(() => {
        setGraphData({ labels: Object.keys(tasks), data: Object.values(tasks) })
        onTasks(tasks)
    }, [tasks])

    useEffect(() => {
        setChartData({
        labels: graphData.labels,
        datasets: [
            {
            data: graphData.data,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10,
            },]
        })
    }, [graphData])


    const options =  { 
        tooltips: {
          enabled: false
        },
        plugins: {
          datalabels: {
            formatter: (percentageFormatter.formatter),
            color: '#fff',
            font:{
              size: '20px',
              weight: 'bolder',
              style: 'italic'
          }
          },
          legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
              padding: 30,
              color: '#404069',
              font: {
                size: "20px"
              },
              boxWidth: 60,
              boxHeight: 15,
              generateLabels: (chart) => {
                const datasets = chart.data.datasets;
                const total = datasets[0].data.map((data) => data)
                const sum = total.reduce( (a,b) => a + b, 0)
                
                const customLabels = datasets[0].data.map((data, i) => {
                    const percentage = (data*100 / sum).toFixed(2)+"%";
                    let text = chart.data.labels[i]
                    text = text[0].toUpperCase() + text.substring(1)
                    return {
                      text: `${text}: ${data} -- ${percentage}`,
                      fillStyle: datasets[0].backgroundColor[i],
                    }
                })

                customLabels.push({
                    text:`Total: ${sum}`,
                    fillStyle: '#000000'
                })
                return customLabels

              }
            }
          },
        }
      }

  return {
    isLoading,
    chartData,
    options,
  }
}
