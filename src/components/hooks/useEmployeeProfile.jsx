import { useGetAssigneeTasks } from '../../hooks/useGetAssigneeTasks';
import { percentageFormatter } from '../../utils/percentageFormatter'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const useEmployeeProfile = (member) => {

  const { tasksByAssignee, setTasksByAssignee, isLoading, setIsLoading} = useGetAssigneeTasks(member.id)
  const [dataChart, setDataChart] = useState('')

  const filterChange = (filterData, historyFilterData) => {
    setTasksByAssignee({
      tasks: filterData,
      dataHistory: historyFilterData
    })
  }

  useEffect(() => {
    if(tasksByAssignee?.tasks && tasksByAssignee?.dataHistory){
      const labelsForGraph = Object.keys(tasksByAssignee.tasks);
      labelsForGraph.push('total_closed_history')
    
      const valuesForGraph = Object.values(tasksByAssignee.tasks);
      valuesForGraph.push(tasksByAssignee?.dataHistory?.totalClosedH)

      setDataChart({
        labels: labelsForGraph,
        datasets: [
          {
            data: valuesForGraph,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(201, 208, 70)',
            ],
            borderColor: [
              'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 10,
          },
        ]}
      )
      setIsLoading(false);
    }

  }, [tasksByAssignee])



  const options =  { 
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        formatter: (percentageFormatter.formatter),
        color: '#fff',
      },
      legend: {
          labels: {
              color: '#000000',
              font: {
                size: "14px"
              }
          }
      },
      
    }
  }
  return {
    tasksByAssignee,
    isLoading,
    historyByAssignee: tasksByAssignee?.dataHistory,
    filterChange,
    options,
    dataChart,
  }
}
