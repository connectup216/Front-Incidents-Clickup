import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useRef } from 'react';
import { exportChart } from '../utils/exportChart';

import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Loading } from './loading/Loading';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const GeneralChart = ({ tittle, isHidden, options, chartData, isLoading }) => {

    const generalChart = useRef(null)

    if(isHidden!=='filters') return <></>
    return (
        <>
        {
            isLoading 
            ? <Loading />
            : <div className='graph-container-child'>
                <h2>{tittle}</h2>
                <div className='graph-item' >
                    <Pie ref={generalChart} data={chartData} options={options}/>
                    <button className='main-export-chart-button' onClick={(e) => exportChart(e, generalChart, 'GeneralChart')}>
                      EXPORT
                    </button>
                </div>
            </div>
        }
        </>
    )
}
