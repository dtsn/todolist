import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

const TODO = 'Remember the milk';

describe('Create todo component', () => {
	it('Renders', () => {
		render(<TodoList/>);
		expect(screen.getByText('Add')).toBeInTheDocument();
	});

	it('Adds and deletes todo', () => {
		render(<TodoList />);

		const textInput = screen.getByTestId('add');
		const addButton = screen.getByText('Add');
		// change the text field
		fireEvent.change(
			textInput,
			{
				target: {
					value: TODO,
				}
			}
		);
		// click the button
		fireEvent(addButton, new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		}));
		// does the todo exist
		expect(screen.getByText(TODO)).toBeInTheDocument();
		const deleteButton = screen.getByText('Delete');
		fireEvent(deleteButton, new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		}));
		expect(screen.queryByText(TODO)).not.toBeInTheDocument();
	});

	/**
	 * @todo mock localstorage
	 *
	 * Unfortunately within the alloted time of 1 hour I have failed to
	 * discover a successful way to mock localstorage for Jest
	 *
	 */
});
