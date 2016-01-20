import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown.jsx';

const myDropdown = (
  <Dropdown displayText="I'm a Dropdown">
    <h1>Hello</h1>
    <h1>Bye</h1>
  </Dropdown>
);

ReactDOM.render(
  myDropdown,
  document.getElementById('root')
);
