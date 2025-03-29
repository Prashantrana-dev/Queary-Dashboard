import React from 'react';

const QueryHistory = ({ history }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Query History</h2>
      <ul>
        {history.map((query, idx) => (
          <li key={idx} className="text-gray-600">{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
