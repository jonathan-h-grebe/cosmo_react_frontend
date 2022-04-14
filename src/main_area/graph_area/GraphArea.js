import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';

var _ = require('lodash');



function GraphArea(){

    const [graphData, setGraphData] = useState([])
    function get_application_waiting(){

        fetch('http://localhost:4000/api/crowd_stats')
            .then(response => response.json())
            .then(resp => {
                //alert("got data" + Object.keys(resp.data[0]))
                setGraphData( _.map(resp.data, (item) => {
                    return {
                        applications_waiting: item.applications_waiting,
                        date_time: item.inserted_at
                    }            
                }))
            })
        }
    useEffect(() => {
        // alert("in use effect its only once for real")

        get_application_waiting()
        const ctx = document.getElementById('mychart');

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: _.map(graphData, (item) => item.date_time),
                datasets: [{
                     label: '# of applications waiting',
                    data: _.map(graphData, (item) => item.applications_waiting),
                    // data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        beginAtZero: false,
                        bounds: 'data'

                    }
                }
            }
        });

        return () => {
            alert("cleaning up")
            let c = Chart.getChart("mychart")
            c.destroy()
        }
       }, []

    );

    function dosth(){
        const ctx = document.getElementById("mychart")
        
        alert(Object.keys(ctx))
    }

    return(
        <div style={{"flexGrow": "8", "backgroundColor": "aliceblue"}}>
        <div style={{"width":"800px", "height":"400px"} }>
            <canvas id ="mychart"></canvas>
        </div>
        </div>
    );
}

export default GraphArea;