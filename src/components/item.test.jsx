import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from "./item";

const EXAMPLE_TODO = {
	id: 1,
	text: 'Remember the milk',
	status: false,
}

describe('Item Component', () => {
	it('Displays the todo text', () => {
		render(<Item
			todo={EXAMPLE_TODO}
		/>);
		expect(screen.getByText(EXAMPLE_TODO.text)).toBeInTheDocument();
	});

	it('Checkbox is unticked', () => {
		render(<Item
			todo={EXAMPLE_TODO}
		/>);

		const checkbox = screen.getByTestId('list-' + EXAMPLE_TODO.id);
		expect(checkbox.checked).toEqual(false);
	});

	it('Checkbox is checked', () => {
		render(<Item
			todo={{
				...EXAMPLE_TODO,
				checked: true
			}}
		/>);

		const checkbox = screen.getByTestId('list-' + EXAMPLE_TODO.id);
		expect(checkbox.checked).toEqual(false);
	});

	it('Checkbox click function is called', () => {

		const mockChange = jest.fn();

		render(<Item
			todo={EXAMPLE_TODO}
			onStatusChange={mockChange}
		/>);

		const checkbox = screen.getByTestId('list-' + EXAMPLE_TODO.id);

		fireEvent(
			checkbox,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			})
		);

		expect(mockChange).toHaveBeenCalledTimes(1);
	});

	it('Delete function is called', () => {

		const mockDelete = jest.fn();

		render(<Item
			todo={EXAMPLE_TODO}
			onDelete={mockDelete}
		/>);

		const deleteButton = screen.getByText('Delete');

		fireEvent(
			deleteButton,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			})
		);

		expect(mockDelete).toHaveBeenCalledTimes(1);
	});
});
