// filepath: c:\Users\Prashant Rana\Desktop\New folder\query-dashboard\src\App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import { submitQuery, setResults } from './redux/actions/queryActions';

const App = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.query.history);
  const results = useSelector((state) => state.query.results);

  const handleQuerySubmit = (query) => {
    dispatch(submitQuery(query));
    // Simulate query processing and results
    const mockResults = [
      { name: 'Result 1', value: 400 },
      { name: 'Result 2', value: 300 },
      { name: 'Result 3', value: 200 },
    ];
    dispatch(setResults(mockResults));
  };

  return (
    <div className="container mx-auto">
      <QueryInput onSubmitQuery={handleQuerySubmit} />
      <QueryHistory history={history} />
      <ResultsDisplay data={results} />
    </div>
  );
};

export default App;