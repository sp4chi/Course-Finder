
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import BarChart from './BarChart'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarData = (props) => {
    const options = {
        responsive: true,

    };

    const myMap = []
    const a = props.barData.map(x => x['Provider']).filter(e => e)

    for (let i = 0; i < a.length; i++) {
        if (myMap[a[i]])
            myMap[a[i]]++
        else
            myMap[a[i]] = 1

    }
    const labels = Object.keys(myMap);
    const data = Object.values(myMap)
    const bardata = {
        labels,
        datasets: [
            {
                label: 'Course Providers',
                data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };
    //console.log(myMap)
    return (<>
        <BarChart data={bardata} options={options} />
    </>)

}


export default BarData;
