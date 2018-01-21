import { Navigation } from '../Navigation';
import navLinks from '../../data/navigation.json';
import smLinks from '../../data/social-media.json';
import { sel, TestHelper } from '../../../../tests/utils';

const defaultProps = {
	location: {
		pathname: '/'
	}
};

const helper = new TestHelper(Navigation, defaultProps);

test('the component mounts with defaults', () => {
	const wrapper = helper.mountComponent({}, true);

	expect(wrapper).toMatchSnapshot();
});

test('it renders correct number of navigation and social media links', () => {
	const wrapper = helper.mountComponent();
	const elNavLinks = wrapper.find(sel('nav-links')).children();
	const elSocialMediaLinks = wrapper.find(sel('social-media-links')).children();

	expect(elNavLinks).toHaveLength(navLinks.length);
	expect(elSocialMediaLinks).toHaveLength(smLinks.length);
});

test('method "getDefaultOverlayColor()" returns correct color', () => {
	const pathname = '/contact';
	const wrapper = helper.mountComponent({ location: { pathname } }, true);
	const color = wrapper.instance().getDefaultOverlayColor();

	expect(color).toBe(navLinks.filter(item => item.path === pathname)[0].overlayColor);
});

xtest('it changes overlay color when user hover over a navigation link', () => {
	const index = 1;
	const wrapper = helper.mountComponent();
	const linkToHover = wrapper
		.find(sel('nav-link'))
		.children()
		.at(index);

	linkToHover.simulate('mouseenter');
	let overlayColor = wrapper.find(sel('overlay')).get(0).props.style.backgroundColor;
	expect(overlayColor).toBe(navLinks[index].overlayColor);

	linkToHover.simulate('mouseleave');
	overlayColor = wrapper.find(sel('overlay')).get(0).props.style.backgroundColor;
	expect(overlayColor).toBe(navLinks[0].overlayColor);
});

test('method "changeOverlayColorHandler()" changes overlay color', () => {
	const wrapper = helper.mountComponent({}, true);
	const backgroundColor = wrapper.instance().getDefaultOverlayColor();
	const newColor = '#001122';

	//	if color is provided, we expect overlay to have new color
	wrapper.instance().changeOverlayColorHandler(newColor);
	wrapper.update();
	let overlayStyle = wrapper.find(sel('overlay')).get(0).props.style;
	expect(overlayStyle).toEqual({ backgroundColor: newColor });

	//	if color is not provided, we expect overlay to have default color
	wrapper.instance().changeOverlayColorHandler();
	wrapper.update();
	overlayStyle = wrapper.find(sel('overlay')).get(0).props.style;
	expect(overlayStyle).toEqual({ backgroundColor });
});

test('it switch "is-open" class when toggle clicked', () => {
	const wrapper = helper.mountComponent();
	const toggle = wrapper.find(sel('nav-toggle'));

	toggle.simulate('click');
	expect(wrapper.find(sel('navigation')).hasClass('is-open')).toBe(true);

	toggle.simulate('click');
	expect(wrapper.find(sel('navigation')).hasClass('is-open')).toBe(false);
});
