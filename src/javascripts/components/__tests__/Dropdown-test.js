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
      component.props.children[0].props.children[0].props.children,
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
  'After we click the dropdown is open',
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

    assert.equal(
      component.props.className,
      'dropdown open'
    );
    assert.end();
  }
);

test(
  'When we pass children to a Dropdown component they get rendered as <li> with a class of dropdown_item',
  (assert) => {
    let component;
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Dropdown displayText="whatever">
        <p>Test 1</p>
        <div>
          <div>Yo</div>
        </div>
      </Dropdown>
    );

    component = renderer.getRenderOutput();

    assert.equal(
      component.props.children[1].props.children[0].type,
      'li'
    );

    assert.equal(
      component.props.children[1].props.children[1].type,
      'li'
    );

    assert.equal(
      component.props.children[1].props.children[0].props.className,
      'dropdown_item'
    );

    assert.end()
  }
);

test(
  'Passing a colored prop to a Dropdown assigns it a class of dropdown_colored',
  (assert) => {
    let component;
    const renderer = TestUtils.createRenderer();
    renderer.render(
      <Dropdown displayText="whatever" colored />
    );

    component = renderer.getRenderOutput();

    assert.equal(
      component.props.className,
      'dropdown dropdown_colored'
    );

    assert.end()
  }
);
