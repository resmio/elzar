import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown.jsx';

const myDropdown = (
  <Dropdown>
    <h1>Hello</h1>
  </Dropdown>
);

ReactDOM.render(
  myDropdown,
  document.getElementById('root')
);
