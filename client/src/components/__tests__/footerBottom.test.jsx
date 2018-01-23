import FooterBottom from '../FooterBottom';
import { TestHelper } from '../../../../tests/utils';

const defaultProps = {};

const helper = new TestHelper(FooterBottom, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});
