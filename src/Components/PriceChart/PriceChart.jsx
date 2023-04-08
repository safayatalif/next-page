import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const PriceChart = () => {
    const data = useLoaderData()
    // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

    return (
        <div className='mx-auto max-w-5xl mt-12'>
            <LineChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <p className='text-center mt-8 font-bold'>fig: Re chart</p>
        </div>
    );
};

export default PriceChart;