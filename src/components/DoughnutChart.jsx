import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({data}) => {
    return (
        <div className='graph-container-child'>
            <h2>Tittle</h2>
            <Doughnut data={data}/>
        </div>
    )
}
