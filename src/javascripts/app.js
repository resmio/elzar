import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown.jsx';

const myDropdown = (
  <Dropdown displayText="I'm a Dropdown">
    <a href="#">Element 1</a>
    <a href="#">Element 2</a>
    <a href="#">Element 3</a>
  </Dropdown>
);

ReactDOM.render(
  myDropdown,
  document.getElementById('root')
);
