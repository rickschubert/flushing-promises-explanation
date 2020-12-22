import React, { useState } from 'react';

function App() {
  const [webResponse, setWebResponse] = useState("Empty");
  fetch('http://localhost:3001/')
  .then(response => response.json())
  .then(data => {
    console.warn(data)
    setWebResponse(JSON.stringify(data))
  });

  return (
    <div className="App">
      <div className="response">
        {webResponse}
      </div>
    </div>
  );
}

export default App;
