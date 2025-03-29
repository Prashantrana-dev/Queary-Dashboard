// src/components/QueryInput.js
import React, { useState } from 'react';

const QueryInput = ({ onSubmitQuery }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Simulate AI-powered suggestions
    setSuggestions(['Suggestion 1', 'Suggestion 2', 'Suggestion 3']);
  };

  const handleSubmit = () => {
    if (query) {
      onSubmitQuery(query);
      setQuery('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Ask a question..."
        className="border p-2 rounded-md w-full"
      />
      <button onClick={handleSubmit} className="mt-2 p-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
      <ul className="mt-2">
        {suggestions.map((suggestion, idx) => (
          <li key={idx} className="text-gray-600">{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryInput;
