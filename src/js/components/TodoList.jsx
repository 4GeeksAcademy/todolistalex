import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {

	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");


	const addTask = (e) => {

		if (e.key === "Enter" && input.trim() !== "") {

			setTasks([...tasks, input]);

			setInput("");
		}
	};


	const deleteTask = (taskToDelete) => {

		setTasks(
			tasks.filter((task) => task !== taskToDelete)
		);

	};


	return (
		<div className="container mt-5">

			<h1 className="text-center">
				Todo List
			</h1>


			<input
				type="text"
				className="form-control"
				placeholder="Añadir tarea"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={addTask}
			/>


			<ul className="list-group mt-3">


				{
					tasks.length === 0 ?

					<li className="list-group-item text-muted">
						No hay tareas, añadir tareas
					</li>

					:

					tasks.map((task, index) => (

						<TodoItem
							key={index}
							task={task}
							deleteTask={deleteTask}
						/>

					))
				}


			</ul>


			<p className="mt-3 text-muted">
				{tasks.length} tareas pendientes
			</p>

		</div>
	);
};


export default TodoList;