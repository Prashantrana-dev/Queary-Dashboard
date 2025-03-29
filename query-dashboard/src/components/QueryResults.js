// src/components/QueryResults.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const QueryResults = ({ data }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg">Query Results</h3>
      {data ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default QueryResults;
