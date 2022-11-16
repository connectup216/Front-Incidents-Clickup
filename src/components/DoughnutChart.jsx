import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const DoughnutChart = ({data , tittle, options}) => {
    return (
        <div className='graph-container-child'>
            <h2>{tittle}</h2>
            <Doughnut data={data} options={options}/>
        </div>
    )
}
