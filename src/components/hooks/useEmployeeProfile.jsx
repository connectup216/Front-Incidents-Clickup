import { useGetAssigneeTasks } from '../../hooks/useGetAssigneeTasks';
import { useGetHistoryByU } from '../../hooks/useGetHistoryByU'
import { percentageFormatter } from '../../utils/percentageFormatter'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const useEmployeeProfile = (member) => {
    const { tasksByAssignee, setTasksByAssignee, isLoading} = useGetAssigneeTasks(member.id)
  const { historyByAssignee, setHistoryByAssignee , isLoadingH } = useGetHistoryByU(member.id)

  const filterChange = (filterData, historyFilterData) => {
    setTasksByAssignee(filterData)
    setHistoryByAssignee(historyFilterData)
  }


  const labelsForGraph = Object.keys(tasksByAssignee);
  labelsForGraph.push('total_closed_history')

  const valuesForGraph = Object.values(tasksByAssignee);
  valuesForGraph.push(historyByAssignee.totalClosedH)

  const data = {
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
      ]};

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
    historyByAssignee,
    filterChange,
    options,
    data,
  }
}
