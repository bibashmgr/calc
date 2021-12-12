import React from 'react';
import { useState } from 'react';

// scss
import './App.scss';

// components
import Main from './components/Main';
import History from './components/History';

function App() {

  const [value, setValue] = useState();

  return (
        <section className='section-container'>
          <Main value={value} setValue={setValue} />
          <History />
        </section>
  );
}

export default App;
