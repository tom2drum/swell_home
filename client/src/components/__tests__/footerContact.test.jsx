import FooterContact from '../FooterContact';
import { TestHelper } from '../../../../tests/utils';

const defaultProps = {};

const helper = new TestHelper(FooterContact, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});
