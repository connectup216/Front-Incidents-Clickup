import { useState } from 'react'
import { HeaderComp, Members, Filters, DoughnutChart } from './components'

function TicketingApp() {

  const [sectionVisible, setSectionVisible ] = useState('filters');
  
  const changeBarVisible = (section) => {
    setSectionVisible(section)
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        color: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        hoverOffset: 10,
        
      },
    ],
    options: {
        plugins: { 
          legend: {
            labels: {
              fontColor: "white", 
              font: {
                size: 18 
              }
            }
          }
        },scales: {
            yAxes: [{
                ticks: {
                    fontColor: "green",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "purple",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }};


  return (
    <>
      <HeaderComp changeSection={changeBarVisible} />
      <section className='main-container'>
        <div className='graph-container'>
          <DoughnutChart data={data}/>
        </div>
        <div className='filters-container'>
          {sectionVisible == 'filters' ? <Filters/> : <Members/>}
        </div>
      </section>
    </>
  )
}

export default TicketingApp
