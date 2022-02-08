import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import styled from 'styled-components';
import './App.css';

const CardGrid = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const url = 'https://raw.githubusercontent.com/vencertorres/frontend-mentor-solutions/main/time-tracking-dashboard/src/data.json';

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error.message))
  }, []);

  function handleClick(e) {
    setTimeframe(e.target.value);
  }

  return (
    <React.Fragment>
      <Sidebar onClick={handleClick} timeframe={timeframe} />
      <CardGrid>
        {data.map(item =>
          <Card key={item.title} item={item} timeframe={timeframe} />
        )}
      </CardGrid>
    </React.Fragment>
  );
}

render(<App />, document.querySelector('main'));
