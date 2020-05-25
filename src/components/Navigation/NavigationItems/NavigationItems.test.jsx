import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('<NavigationItems /> when authenticated', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems isAuthenticated />);
  });

  it('should render one <NavigationItem /> element if authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(1);
  });

  it('should render a log out element if authenticated', () => {
    expect(
      wrapper.contains(
        <NavigationItem link="/logout" exact={false}>
          Logout
        </NavigationItem>
      )
    );
  });
});
