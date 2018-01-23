import Lookbook from '../Lookbook';
import { sel, TestHelper } from '../../../../tests/utils';

const defaultProps = {};

const helper = new TestHelper(Lookbook, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});

test('it knows when user changes slide', () => {
	const wrapper = helper.mountComponent();
	// console.log(wrapper.find('.slick-initialized').children().get(0));
});
