import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './components/Dropdown.jsx';
import Alert from './components/Alert.jsx';

const testPage = (
  <div>
    <Dropdown displayText="I'm a Dropdown">
      <a href="#">Element 1</a>
      <a href="#">Element 2</a>
      <a href="#">Element 3</a>
    </Dropdown>

    <Dropdown displayText="I'm a color Dropdown" colored>
      <a href="#">Element 1</a>
      <a href="#">Element 2</a>
      <a href="#">Element 3</a>
    </Dropdown>

    <Alert type='error' displayHeader="Error!" displayText="Some text" />
  </div>
);

ReactDOM.render(
  testPage,
  document.getElementById('root')
);
