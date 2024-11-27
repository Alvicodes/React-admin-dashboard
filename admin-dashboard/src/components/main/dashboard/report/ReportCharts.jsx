import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 82, 56],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 41],
            },
            {
                name: 'Customers',
                data: [15, 11, 32, 18, 9, 24, 11],
            },
        ]
    })

    return (
        <div>
            charts
        </div>
    )
}

export default ReportCharts
