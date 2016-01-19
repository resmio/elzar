import test from 'tape';
import Dropdown from '../Dropdown.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const setupWithoutRender = () => {
  return new Dropdown();
};

const setupWithRender = () => {
  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Dropdown displayText="Carabiruri"/>
  );
  return renderer.getRenderOutput();
};

test(
  'Dropdown renders a <div> with a class of dropdown',
  (assert) => {
    const component = setupWithRender();
    assert.equal(
      component.props.className,
      'dropdown'
    );
    assert.end();
  }
);

test(
  'Dropdown renders its display text',
  (assert) => {
    const component = setupWithRender();
    assert.equal(
      component.props.children[0],
      'Carabiruri'
    );
    assert.end();
  }
);


test(
  'Dropdown is closed initially',
  (assert) => {
    const component = setupWithoutRender();
    assert.equal(
      component.state.isOpen,
      false
    );
    assert.end();
  }
);
