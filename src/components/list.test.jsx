import React from 'react';
import { render } from '@testing-library/react';
import List from './list';

const EXAMPLE_LIST = [{
	id: 1,
	text: 'Remember the milk',
	status: false,
}, {
	id: 2,
	text: 'and the bread',
	status: false,
}]

describe('List Component', () => {
	it('Displays the todo list', () => {
		render(<List
			todos={EXAMPLE_LIST}
		/>);

		expect(document.getElementsByTagName('li')).toHaveLength(2);
	});
});
