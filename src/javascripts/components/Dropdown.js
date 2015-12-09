const React = require('react');
const ReactDOM = require('react-dom');
console.log('Dropdown');

const Dropdown = React.createClass({
  render: function() {
    return (
      <div className="dropdown">
        Hello, world! I am a Dropdown.
      </div>
    );
  }
});

ReactDOM.render(
  <Dropdown />,
  document.getElementById('root')
);

export default Dropdown;
