import React from 'react';
import { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        { assignmentNumber: 1, marks: 58 },
        { assignmentNumber: 2, marks: 60 },
        { assignmentNumber: 3, marks: 55 },
        { assignmentNumber: 4, marks: 60 },
        { assignmentNumber: 5, marks: 60 },
        { assignmentNumber: 6, marks: 55 },
        { assignmentNumber: 7, marks: 50 },
        { assignmentNumber: 8, marks: 48 }
    ];

    return (
        <div>
            <h1>Statistics page</h1>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="assignmentNumber" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                <Scatter dataKey="marks" fill="red" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;