import { shallow } from 'vue-test-utils';
import Logo from './index.vue';

describe('Logo', () => {
  it('should match snapshot', () => {
  // when
  const wrapper = shallow(Logo);

  // then
  expect(wrapper.element).toMatchSnapshot();
});
});
