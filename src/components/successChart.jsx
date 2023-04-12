import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";


const SuccessChart = ({percentByNote}) => {
    const data = [];
    Object.keys(percentByNote).map(note=>{
        data.push({
            note,
            percent: percentByNote[note]*100
        });
    });
    return (
        <LineChart
            width={300}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="note" />
            <YAxis />
            <Line
                type="monotone"
                dataKey="percent"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        </LineChart>
    );
}

export default SuccessChart;
