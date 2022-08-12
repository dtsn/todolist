import Item from "./item";

/**
 * List of todos
 *
 * This is seperated out as it's own component, overkill at the moment
 * but we may want to implement more features (ordering, sorting) in
 * the future.
 *
 * @param {*} {todos, onStatusChange, onDelete}
 * @return {*}
 */
function List({todos, onStatusChange, onDelete}) {
	// create the list of todos
	const todoList = todos.map((todo) => {
		return (
			<li key={todo.id}>
				<Item
					todo={todo}
					onStatusChange={onStatusChange}
					onDelete={onDelete}
				/>
			</li>
		);
	});

	// using an ordered list because the array has an order
	// may want to implement ordering at a later date
	return (
		<ol className="todo">
			{todoList}
		</ol>
	)
}

export default List;
