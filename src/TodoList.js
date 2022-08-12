import React, { useState, useEffect } from 'react';
import List from "./components/list";
import Create from './components/create';
import './TodoList.css';

/**
 * TodoList
 *
 * Uses localstorage to save the information for the user
 *
 * @return {*}
 */
function TodoList() {
	const [todos, setTodos] = useState(() => {
		// when the state is loaded check to see if we have data in localstoage
		const saved = localStorage.getItem('todos');
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		// save the state to local storage
		// @todo check the user has localstorage, if not we could use cookie
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	/**
	 * Create a Todo
	 * Add a new todo to the todos state object
	 * @param {string} text
	 */
	const createTodo = (text) => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				text,
				status: false
			}
		]);
	};

	/**
	 * When the checkbox of a todo is clicked
	 *
	 * @param {*} todo
	 * @param {boolean} status
	 */
	const onStatusChange = (todo, status) => {
		// updated the status
		todos.forEach(t => {
			if (t.id === todo.id) {
				t.status = status;
			}
		});
		setTodos([
			...todos
		]);
	}

	/**
	 * Delete a todo
	 * @param {*} todo
	 */
	const onDelete = (todo) => {
		setTodos([
			...todos.filter(t => {
				return t.id !== todo.id;
			})
		]);
	}

	return (
		<div className="todoApp">
			<List
				todos={todos}
				onStatusChange={onStatusChange}
				onDelete={onDelete}
			/>
			<Create createTodo={createTodo} />
		</div>
	)
}

export default TodoList;
