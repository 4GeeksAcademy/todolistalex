import React from "react";

const TodoItem = ({ task, deleteTask }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{task}

			<i
				className="fas fa-trash text-danger delete-icon"
				onClick={() => deleteTask(task)}
			></i>
		</li>
	);
};

export default TodoItem;