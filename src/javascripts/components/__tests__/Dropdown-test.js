import test from 'tape';
import Dropdown from '../Dropdown.jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sd from 'skin-deep';

const tree = sd.shallowRender(<Dropdown displayText="Carabiruri" ref="Dropdown"/>);

test(
  'Dropdown renders a <div> with a class of dropdown',
  (assert) => {
    assert.equal(
      tree.props.className,
      'dropdown'
    );
    assert.end();
  }
);

test(
  'Dropdown renders its display text',
  (assert) => {
    assert.equal(
      tree.subTree('span').text(),
      'Carabiruri'
    );
    assert.end();
  }
);

test(
  'Dropdown is closed initially',
  (assert) => {
    //need the mounted instance to check state
    const component = tree.getMountedInstance();
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
    // manually invoke onClick handler via props
    // http://stackoverflow.com/a/33729151/2565132
    tree.subTree('button').props.onClick({ preventDefault: () => {} });

    assert.equal(
      tree.getMountedInstance().state.isOpen,
      true
    );
    assert.end();
  }
);

test(
  'When we pass children to a Dropdown component they get rendered as <li> with a class of dropdown_item',
  (assert) => {
    const specialTree = sd.shallowRender(
      <Dropdown displayText="whatever">
        <p>Test 1</p>
        <div>
          <div>Yo</div>
        </div>
      </Dropdown>
    );

    assert.equal(
      //2 children
      specialTree.everySubTree('li').length,
      2
    );

    assert.equal(
      specialTree.subTree('li').props.className,
      'dropdown_item'
    );

    assert.end()
  }
);

test(
  'Passing a colored prop to a Dropdown assigns it a class of dropdown_colored',
  (assert) => {
    const specialTree = sd.shallowRender(<Dropdown displayText="whatever" colored />);

    assert.equal(
      specialTree.props.className,
      'dropdown dropdown_colored'
    );

    assert.end()
  }

);

test(
  'If a dropdown_item is a link it gets a dropdown_link class',
  (assert) => {
    const specialTree = sd.shallowRender(
      <Dropdown displayText="whatever">
        <a href="#">One</a>
        <p>Two</p>
      </Dropdown>
    );

    assert.equal(
      specialTree.subTree('a').props.className,
      'dropdown_link'
    );

    assert.notEqual(
      specialTree.subTree('p').props.className,
      'dropdown_link'
    );

    assert.end()
  }
);
