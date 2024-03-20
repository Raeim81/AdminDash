import React from 'react';
import { FaEnvelope, FaComments, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';


function Home() {
    const doughnutData = {
        labels: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'],
        datasets: [{
            data: [25, 20, 30, 15, 10], // Replace with your actual data
            backgroundColor: [
                'rgba(0, 100, 0, 0.7)', // dark green
                'rgba(34, 139, 34, 0.7)', // light green
                'rgba(255, 215, 0, 0.7)', // yellow
                'rgba(255, 165, 0, 0.7)', // orange
                'rgba(139, 0, 0, 0.7)' // dark red
            ],
            hoverBackgroundColor: [
                'rgba(0, 100, 0, 0.9)',
                'rgba(34, 139, 34, 0.9)',
                'rgba(255, 215, 0, 0.9)',
                'rgba(255, 165, 0, 0.9)',
                'rgba(139, 0, 0, 0.9)'
            ],
            borderWidth: 1,
        }]
    };

    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Invites Sent',
                data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 75, 90], // Replace with your data for Invites Sent
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
                label: 'Feedback Given',
                data: [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 27], // Replace with your data for Feedback Given
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
            },
            {
                label: 'Positive Feedback',
                data: [25, 20, 60, 41, 66, 75, 35, 18, 54, 60, 65, 70], // Replace with your data for Positive Feedback
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
                label: 'Negative Feedback',
                data: [35, 69, 20, 54, 76, 75, 50, 85, 40, 25, 59, 40], // Replace with your data for Negative Feedback
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Total Feedback',
                data: [20, 30, 50, 20, 60, 70, 80, 90, 60, 50, 40, 30], // Example data for Total Feedback
                backgroundColor: 'rgba(133, 105, 241, 0.5)',
                borderColor: 'rgba(133, 105, 241)',
                fill: false,
                tension: 0.1
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    };
 

   


  return (
    <main className='container-fluid p-3'>
    <div className='row mb-4'>
        <h3 className="col-12 text-center text-white"></h3>
        
    </div>

    <div className='row'id='cards'>

    <div className='col-12 col-md-6 col-lg-6 col-xl-3 mb-4'>
            <div className='card bg-primary text-white'>
                <div className='card-body text-center'>
                    <h4 className='card-title'>Invites Sent</h4>
                    <FaEnvelope size={50}/>
                    <h3 className='mt-3'>300</h3>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-3 mb-4'>
            <div className='card bg-warning text-white '>
                <div className='card-body text-center'>
                    <h4 className='card-title'>Feedback Given</h4>
                    <FaComments size={50}/>
                    <h3 className='mt-3'>120</h3>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-3 mb-4'>
            <div className='card bg-success text-white'>
                <div className='card-body text-center'>
                    <h4 className='card-title'>Positive</h4>
                    <FaThumbsUp size={50}/>
                    <h3 className='mt-3'>90</h3>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6 col-xl-3 mb-4'>
            <div className='card bg-danger text-white '>
                <div className='card-body text-center'>
                    <h4 className='card-title'>Negative</h4>
                    <FaThumbsDown size={50}/>
                    <h3 className='mt-3'>30</h3>
                </div>
            </div>
        </div>
    </div>

    <div className='row'>
    <div className='col-12 col-md-12 col-lg-12 col-xl-4 mb-4'>
    {/* Doughnut chart */}
    <div className='chart-container' style={{ height: '50vh' }}>
      <Doughnut data={doughnutData} />
    </div>
  </div>
  <div className='col-12 col-md-12 col-lg-12 col-xl-4 mb-4'>
    {/* Bar chart */}
    <div className='chart-container' id = 'bar_chart' style={{ height: '50vh' }}>
      <Bar data={barData} options={options} />
    </div>
  </div>
  <div className='col-12 col-md-12 col-lg-12 col-xl-4 mb-4'>
    {/* Line chart */}
    <div className='chart-container' style={{ height: '50vh' }}>
      <Line data={lineData} options={options} />
    </div>
  </div>
</div>
</main>
  )
}

export default Home