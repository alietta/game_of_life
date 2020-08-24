import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { matchers } from 'jest-emotion';
import styled from '@emotion/styled';
import { WithHeadbarLayout } from './WithHeadbarLayout';

expect.extend(matchers);

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  user: {
    name: 'Helen',
  },
});
describe('WithHeadbarLayout', () => {
  const Component: React.FC = () => <h1>Test</h1>;
  it('render', () => {
    const element = mount(
      <WithHeadbarLayout>
        <Component />
      </WithHeadbarLayout>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store,
        },
      }
    );
    expect(element.html()).toMatchSnapshot();
  });
  it('render with fallback background', () => {
    jest.mock('sancho', () => ({
      Container: () => <div name="container" />,
      IconLogOut: () => <div />,
      Button: () => <div />,
      IconSun: () => <div />,
      useTheme: () => ({ colors: { background: { default: undefined } } }),
    }));
    const element = mount(
      <WithHeadbarLayout>
        <Component />
      </WithHeadbarLayout>,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {
          store,
        },
      }
    );
    expect(element.find('Layout')).toHaveStyleRule('background', 'white');
  });
});
