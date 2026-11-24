"use strict";

const test = require("node:test");
const assert = require("node:assert");
const React = require("react");
const TestRenderer = require("react-test-renderer");
const PureComponent = require("../index.js");

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

function countingComponent() {
  const renders = [];
  class Inner extends React.Component {
    render() {
      renders.push(this.props);
      return React.createElement("span", null, this.props.text);
    }
  }
  return {Inner, renders};
}

function render(element) {
  let renderer;
  TestRenderer.act(() => {
    renderer = TestRenderer.create(element);
  });
  return renderer;
}

function update(renderer, element) {
  TestRenderer.act(() => {
    renderer.update(element);
  });
}

test("renders the wrapped component with its props", () => {
  const {Inner} = countingComponent();
  const Pure = PureComponent(Inner);

  const renderer = render(React.createElement(Pure, {text: "hello"}));

  assert.deepStrictEqual(renderer.toJSON().children, ["hello"]);
});

test("skips re-rendering when props are shallowly equal", () => {
  const {Inner, renders} = countingComponent();
  const Pure = PureComponent(Inner);

  const renderer = render(React.createElement(Pure, {text: "hello"}));
  update(renderer, React.createElement(Pure, {text: "hello"}));

  assert.strictEqual(renders.length, 1);
});

test("re-renders when props change", () => {
  const {Inner, renders} = countingComponent();
  const Pure = PureComponent(Inner);

  const renderer = render(React.createElement(Pure, {text: "hello"}));
  update(renderer, React.createElement(Pure, {text: "bye"}));

  assert.strictEqual(renders.length, 2);
  assert.deepStrictEqual(renderer.toJSON().children, ["bye"]);
});
