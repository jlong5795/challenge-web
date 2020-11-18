import React from 'react';
import './app.css';

import useSystemUsername from './hooks/useSystemUsername';

const App = () => {
  const username = useSystemUsername();

  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
    </div>
  );
}

export default App;
