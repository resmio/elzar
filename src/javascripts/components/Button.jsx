const React = require('react');
var classNames = require('classnames');

export default class Button extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    let theClass = classNames({
      'button': true
    });
    return (
      <div className={ theClass }>
        <button id="dLabel"
                type="button"
        >
          <span>{ this.props.displayText }</span>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  borderColor: React.PropTypes.string,
  fillColor: React.PropTypes.string,
  hoverColor: React.PropTypes.string,
  textColor: React.PropTypes.string
};
