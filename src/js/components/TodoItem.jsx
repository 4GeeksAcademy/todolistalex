import React from "react";


const TodoItem = ({ task, deleteTask }) => {


	return (

		<li className="todo-item">

			<span>
				{task.label}
			</span>


			<i

				className="fas fa-times delete"

				onClick={() => deleteTask(task.id)}

			></i>


		</li>

	);

};


export default TodoItem;