import { useEffect, useState } from "react";
import { useGetIncidentsInfo } from "../../hooks/useGetIncidentsInfo";
import { percentageFormatter } from "../../utils/percentageFormatter";

export const useChartsWtMbrsInfo = () => {

    const { tasksWithMembersInfo, isLoadingTkMmbrInfo, getTasksWthMembrsInfo,} = useGetIncidentsInfo();
    const [ inViewChart, setInViewChart ] = useState('TSKOpen')

    const onChangeChart = (e, chart) => {
        e.preventDefault()
        setInViewChart(chart)
    }

    const [ labels, setLabels ] = useState({
        text: [],
        colors: [],
    });

    const [ chartDataTSKOpen, setChartDataTSKOpen ] = useState({})
    const [ chartDataTSKClosed, setChartDataTSKClosed ] = useState({})
    const [ chartDataTSKClosedHI, setChartDataTSKClosedHI ] = useState({})

    const [ graphDataTSKOpen, setGraphDataTSKOpen ] = useState([]);
    const [ graphDataTSKClosed, setGraphDataTSKClosed ] = useState([]);
    const [ graphDataTSKClosedHI, setGraphDataTSKClosedHI ] = useState([]);

    useEffect(() => {getTasksWthMembrsInfo()}, [])

    useEffect(() => {

        setLabels({
           text: tasksWithMembersInfo?.membersData?.map( (member) => member.username),
           colors: tasksWithMembersInfo?.membersData?.map( (member) => member.color)
        })
        setGraphDataTSKOpen(tasksWithMembersInfo?.membersData?.map( (member) => member.total_incidents_open))
        setGraphDataTSKClosed(tasksWithMembersInfo?.membersData?.map( (member) => member.total_incidents_closed))
        setGraphDataTSKClosedHI(tasksWithMembersInfo?.membersData?.map( (member) => member.total_incidents_closed_historial))

    }, [tasksWithMembersInfo])

    useEffect(() => {
        setChartDataTSKOpen({
        labels: labels,
        datasets: [
            {
            data: graphDataTSKOpen,
            backgroundColor: labels.colors,
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10,
            },]
        })
    }, [graphDataTSKOpen])

    useEffect(() => {
        setChartDataTSKClosed({
        labels: labels,
        datasets: [
            {
            data: graphDataTSKClosed,
            backgroundColor: labels.colors,
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10,
            },]
        })
    }, [graphDataTSKClosed])
    
    useEffect(() => {
        setChartDataTSKClosedHI({
        labels: labels,
        datasets: [
            {
            data: graphDataTSKClosedHI,
            backgroundColor: labels.colors,
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10,
            },]
        })
    }, [graphDataTSKClosedHI])


    const options =  { 
        tooltips: {
          enabled: false
        },
        plugins: {
          datalabels: {
            formatter: (percentageFormatter.formatter),
            color: '#ffff',
            anchor: 'center',
            display: 'auto',
            font:{
                size: '16px',
                weight: 'bolder',
                style: 'italic'
            }
          },
          legend: {
            display: true,
            labels: {
              padding: 15,
              color: '#404069',
              font: {
                size: "17px",
                weight: 'bolder'
              },
              generateLabels: (chart) => {
                const datasets = chart.data.datasets;
                const total = datasets[0].data.map((data) => data)
                const sum = total.reduce( (a,b) => a + b, 0)
                
                const customLabels = datasets[0].data.map((data, i) => {
                    const percentage = (data*100 / sum).toFixed(2)+"%";
                    let text = chart.data.labels.text[i]
                    text = text[0].toUpperCase() + text.substring(1)
                    return {
                        text: `${text}: ${data} -- ${percentage}`,
                        fillStyle: chart.data.labels.colors[i],
                    }
                })

                customLabels.push({
                    text:`Total: ${sum}`,
                    fillStyle: '#000000'
                })
                return customLabels

              },
              boxWidth: 40,
              boxHeight: 10,
            },
            position: 'bottom',
            align: 'start',
          },
        }
      }



  return{
    isLoadingTkMmbrInfo,
    chartDataTSKOpen,
    chartDataTSKClosed,
    chartDataTSKClosedHI,
    options,
    inViewChart,
    onChangeChart,
  }
}
