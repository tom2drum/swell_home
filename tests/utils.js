import React from 'react';
import { mount, shallow } from 'enzyme/build/index';
import { StaticRouter } from 'react-router-dom';

export const sel = id => `[data-test="${id}"]`;

class TestHelper {
	constructor(component, defaultProps) {
		this.component = component;
		this.defaultProps = defaultProps;
	}

	mountComponent(props = {}, isShallow = false) {
		const propsToUse = {
			...this.defaultProps,
			...props
		};

		if (isShallow) {
			return shallow(React.createElement(this.component, propsToUse));
		}

		return mount(
			<StaticRouter context={{}}>{React.createElement(this.component, propsToUse)}</StaticRouter>
		);
	}
}

export { TestHelper };
