import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Create from './create';

const TODO = 'Remember the milk';

describe('Create todo component', () => {
	it('Displays the component', () => {
		render(<Create/>);
		expect(screen.getByText('Add')).toBeInTheDocument();
	});

	it('Checkbox click function is called', () => {

		const mockAdd = jest.fn();

		render(<Create
			createTodo={mockAdd}
		/>);

		const textInput = screen.getByTestId('add');
		const addButton = screen.getByText('Add');

		fireEvent.change(
			textInput,
			{
				target: {
					value: TODO,
				}
			}
		);

		expect(textInput.value).toBe(TODO);

		fireEvent(
			addButton,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			})
		);

		expect(mockAdd).toHaveBeenCalledTimes(1);
		expect(mockAdd).toBeCalledWith(TODO);
	});
});
