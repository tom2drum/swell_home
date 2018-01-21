import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//	setup for fixing issues with react-slick library
window.matchMedia =
	window.matchMedia ||
	function() {
		return {
			matches: false,
			addListener() {},
			removeListener() {}
		};
	};
