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
    <Dropdown displayText="Carabiruri" ref="Dropdown"/>
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

test(
  'The children are hidden by default',
  (assert) => {
    const component = setupWithRender();
    assert.equal(
      component.props.children[1].props.className,
      'hidden'
    );
    assert.end();
  }
);

test(
  'After we click the children are not hidden anymore',
  (assert) => {
    let component;
    const renderer = TestUtils.createRenderer();
    renderer.render(<Dropdown />);

    component = renderer.getRenderOutput();

    // manually invoke onClick handler via props
    // http://stackoverflow.com/a/33729151/2565132
    component.props.onClick({ preventDefault: () => {} });

    // we need to retrieve the output in order to get the changed element
    component = renderer.getRenderOutput();

    assert.notEqual(
      component.props.children[1].props.className,
      'dropdown__list hidden'
    );
    assert.end();
  }
);
