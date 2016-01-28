import test from 'tape';
import Alert from '../Alert.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';

const tree = sd.shallowRender(<Alert alertType='success' displayHeader="Success!" displayText="Some text" />);

test(
  'Alert renders a <div> with a class of message_container',
  (assert) => {
    assert.equal(
      tree.props.className,
      'message_container'
    );
    assert.end();
  }
);

test(
  'Alert renders its display header',
  (assert) => {
    assert.equal(
      tree.subTree('.alert_header').subTree('span').text(),
      'Success!'
    );
    assert.end();
  }
);

test(
  'Alert renders its display text',
  (assert) => {
    assert.equal(
      tree.subTree('.alert_message').subTree('span').text(),
      'Some text'
    );
    assert.end();
  }
);

test(
  'Alert is visible initially',
  (assert) => {
    //need the mounted instance to check state
    const component = tree.getMountedInstance();
    assert.equal(
      component.state.isOpen,
      true
    );
    assert.end();
  }
);

test(
  'After we click the "x" the alert is closed (hidden)',
  (assert) => {
    // manually invoke onClick handler via props
    // http://stackoverflow.com/a/33729151/2565132
    tree.subTree('.close_alert').props.onClick({ preventDefault: () => {} });

    assert.equal(
      tree.getMountedInstance().state.isOpen,
      false
    );
    assert.end();
  }
);
