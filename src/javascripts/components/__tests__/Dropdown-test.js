import test from 'tape';
import Dropdown from '../Dropdown.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const setup = () => {
  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Dropdown
      collapsed="true"
    />
  );
  return renderer.getRenderOutput();
};

test(
  'Dropdown renders a <div> with a class of dropdown',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.className,
      'dropdown'
    );
    assert.end();
  }
);
