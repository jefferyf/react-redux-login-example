import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {};
  const mockStore = configureStore();
  const initialState = {
    // someState: [],
    // someReducer: {},
    loginReducer: {
      isLoginPending: false,
      isLoginSuccess: false,
      loginError: null
    }
  };

  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    props,
    wrapper    
  }
}

describe('snapshot tests', () => {
  it('renders correctly', () => {
    const { wrapper } = setup();

    const tree = renderer
      .create(wrapper)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
});

it('renders the login form', () => {
  const { wrapper } = setup();

  // console.log(enzymeWrapper.debug());
  expect(wrapper.find('.form').length).toBe(1);
});
