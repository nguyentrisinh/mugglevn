/**
 * Created by Asus on 4/27/2017.
 */


const statisticCompany = {

    totalcompanydata: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Total Companies',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    },

    pie: {
        labels: [
            'Produce',
            'Outsource',
        ],
        datasets: [{
            data: [300, 150],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
            ]
        }]
    },

};

export default function CompanyStatistics (state = statisticCompany, action){
    switch (action.type){

        default:
            return state;
    }
};