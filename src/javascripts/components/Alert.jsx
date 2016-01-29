const React = require('react');
var classNames = require('classnames');

export default class Alert extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this._closeAlert = this._closeAlert.bind(this);

  }

  render() {
    let theClass = classNames({
      'message_container': true,
      'hidden': !this.state.isOpen
    });
    return (
      <div className={ theClass }>
        <div className={'alert-box--'+this.props.type }>
          <span className="close_alert" onClick={ this._closeAlert }>
            <svg viewBox="0 0 100 100" className="icon close_icon">
              <use xlinkHref="#symbol-close"></use>
            </svg>
          </span>
        </div>
        <ul
          className='alert_content'
        >
          <li className='alert_header'>
            <span className={'alert_text--'+this.props.type }>
              { this.props.displayHeader }
            </span>
          </li>
          <li className='alert_message'>
            <span>
              { this.props.displayText }
            </span>
          </li>
        </ul>
      </div>
    );
  }

  _closeAlert() {
    this.setState({ isOpen: false });
  }

}
