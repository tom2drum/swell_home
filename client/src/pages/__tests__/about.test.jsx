import About from '../About';
import { TestHelper } from '../../../../tests/utils';

const defaultProps = {};

const helper = new TestHelper(About, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});
