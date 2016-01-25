import test from 'tape';
import Button from '../Button.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';

const tree = sd.shallowRender(<Button />);

test(
  'Button renders a <div> with a class of button',
  (assert) => {
    assert.equal(
      tree.props.className,
      'button'
    );
    assert.end();
  }
);
