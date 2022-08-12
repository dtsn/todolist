/**
 * Todo List Item
 *
 * A basic component to render the todo, features a checkbox to mark the
 * todo as done and a delete button to remove.
 *
 * @param {*} {todo, onStatusChange, onDelete}
 * @return {*}
 */
function Item({todo, onStatusChange, onDelete}) {
	return (
		<div className="item form-check">
			<input
				type="checkbox"
				id={`list-${todo.id}`}
				data-testid={`list-${todo.id}`}
				name={`list-${todo.id}`}
				checked={todo.status}
				className="form-check-input"
				onChange={(e) => {
					onStatusChange(todo, e.target.checked);
				}}
			/>
			<label htmlFor={`list-${todo.id}`} className="form-check-label">
				{todo.text}
			</label>
			<div className="delete-link">
				<button onClick={() => onDelete(todo)} className="btn btn-link">Delete</button>
			</div>
		</div>
	)
}

export default Item;
