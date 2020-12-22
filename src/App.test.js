import { render } from '@testing-library/react';
import App from './App';
import nock from "nock";

test('renders the app', () => {
  const component = render(<App />);
  const app = component.container.querySelector(".App")
  expect(app).toBeInTheDocument();
});

test('renders the web response from the server', async () => {
  nock(/.*/).persist()
  .get(/.*/)
  .reply(200, '{"A": "mocked response"}')
  const component = render(<App />);
  const response = component.container.querySelector(".response")
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)
  await new Promise(setImmediate)

  expect(response).toBeInTheDocument();
  expect(response.textContent).not.toEqual("Empty");
});
