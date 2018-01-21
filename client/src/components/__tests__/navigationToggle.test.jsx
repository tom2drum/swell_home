import NavigationToggle from '../NavigationToggle';
import { sel, TestHelper } from '../../../../tests/utils';

const defaultProps = {
	onClickCallback: jest.fn()
};

const helper = new TestHelper(NavigationToggle, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});

test('it toggles "is-open" class when clicked', () => {
	const wrapper = helper.mountComponent({}, true);
	const toggle = wrapper.find(sel('nav-toggle'));
	toggle.simulate('click');

	expect(wrapper.find(sel('nav-toggle')).hasClass('is-open')).toBe(true);
});
