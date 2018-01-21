import NavigationLink from '../NavigationLink';
import { sel, TestHelper } from '../../../../tests/utils';

const defaultProps = {
	changeOverlayColor() {},
	path: '',
	text: '',
	overlayColor: '',
	to: ''
};

const helper = new TestHelper(NavigationLink, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);
	expect(wrapper).toMatchSnapshot();
});

test('it renders the given text', () => {
	const text = 'foo';
	const wrapper = helper.mountComponent({ text }, true);
	const innerText = wrapper
		.find(sel('nav-link'))
		.children()
		.text();

	expect(innerText).toBe(text);
});

test('it call parent handler when user hovers over', () => {
	const changeOverlayColor = jest.fn();
	const overlayColor = 'white';
	const wrapper = helper.mountComponent({ changeOverlayColor, overlayColor }, true);
	const el = wrapper.find(sel('nav-link'));

	el.simulate('mouseenter');
	expect(changeOverlayColor).toHaveBeenLastCalledWith(overlayColor);

	el.simulate('mouseleave');
	expect(changeOverlayColor).toHaveBeenLastCalledWith();

	expect(changeOverlayColor).toHaveBeenCalledTimes(2);
});
