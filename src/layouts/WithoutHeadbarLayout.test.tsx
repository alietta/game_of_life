import React from 'react';
import { mount } from 'enzyme';
import { WithoutHeadbarLayout } from './WithoutHeadbarLayout';

describe('WithoutHeadbarLayout', () => {
  const Component: React.FC = () => <h1>Test</h1>;
  it('render', () => {
    const element = mount(
      <WithoutHeadbarLayout>
        <Component />
      </WithoutHeadbarLayout>
    );
    expect(element.html()).toMatchSnapshot();
  });
});
