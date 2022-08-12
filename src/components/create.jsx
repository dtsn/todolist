import React, { useState, useEffect, useRef } from 'react';

/**
 * Create a new todo
 *
 * @param {*} {createTodo}
 * @return {*}
 */
function Create({createTodo}) {

	const [value, setValue] = useState('');
	const inputRef = useRef(null);

	useEffect(() => {
		// focus the text field on page load
		inputRef.current.focus();
	});

	return (
		<form className="input-group" onSubmit={(e) => {
			// doing this with onSubmit to allow the `enter` button to work as well
			e.preventDefault();
			// create the todo
			createTodo(value);
			// reset the value of the field
			setValue('');
		}}>
			<input
				type="text"
				value={value}
				className="form-control"
				placeholder="Remember the milk..."
				ref={inputRef}
				data-testid={'add'}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			>
			</input>
			<button type="submit" className="btn btn-primary">Add</button>
		</form>
	);
}
export default Create;
