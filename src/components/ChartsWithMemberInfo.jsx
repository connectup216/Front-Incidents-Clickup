
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useRef } from 'react';
import { exportChart } from '../utils/exportChart';
import { Loading } from './loading/Loading';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const ChartsWithMemberInfo = ({ 
    isHidden,
    inViewChart,
    chartDataTSKOpen,
    chartDataTSKClosed,
    chartDataTSKClosedHI,
    isLoadingTkMmbrInfo,
    options,
    onChangeChart }) => {
    const TSKOpenChart = useRef(null)
    const TSKClosedChart = useRef(null)
    const TSKClosedHIChart = useRef(null)
  
    if(isHidden!=='members') return <></>
    return (
        <>
        {
            isLoadingTkMmbrInfo 
            ? <Loading />
            : <div className='graph-container-child'>
                <h2 className='graph-title'>
                    {inViewChart == 'TSKOpen' && 'Open tasks assigned by member'}
                    {inViewChart == 'TSKClosed' && 'Closed tasks assigned by member'}
                    {inViewChart == 'TSKClosedHI' && 'Closed tasks in historical records by member'}
                </h2>
                <div className={`graph-item ${inViewChart !== 'TSKOpen' && 'hidden' } `} >
                    <Pie ref={TSKOpenChart} data={chartDataTSKOpen} options={options}/>
                    <button className='main-export-chart-button' onClick={(e) => exportChart(e, TSKOpenChart, 'TaskOpenByMembersChart')}>
                        EXPORT
                    </button>
                </div> 

                <div className={`graph-item ${inViewChart !== 'TSKClosed' && 'hidden' } `}>
                    <Pie ref={TSKClosedChart} data={chartDataTSKClosed} options={options}/>
                    <button className='main-export-chart-button' onClick={(e) => exportChart(e, TSKClosedChart, 'TaskClosedByMembersChart')}>
                        EXPORT
                    </button>
                </div> 

                <div className={`graph-item ${inViewChart !== 'TSKClosedHI' && 'hidden' } `}>
                    <Pie ref={TSKClosedHIChart} data={chartDataTSKClosedHI} options={options}/>
                    <button className='main-export-chart-button' onClick={(e) => exportChart(e, TSKClosedHIChart, 'TaskClosedHIByMembersChart')}>
                        EXPORT
                    </button>
                </div>

                <div className='members-charts-buttons'>
                    <figure 
                        className={`circle ${inViewChart == 'TSKOpen' && 'circle-active' } `} 
                        onClick={(e) => onChangeChart(e, 'TSKOpen')}
                    />
                    <figure 
                        className={`circle ${inViewChart == 'TSKClosed' && 'circle-active' } `} 
                        onClick={(e) => onChangeChart(e, 'TSKClosed')}
                    />
                    <figure 
                        className={`circle ${inViewChart == 'TSKClosedHI' && 'circle-active' } `} 
                        onClick={(e) => onChangeChart(e, 'TSKClosedHI')}
                    />
                </div>

            </div>
        }
        </>
    )
}
