import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = () => {

	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");

	const user = "alesanchezr";
const createUser = () => {
	fetch(`https://playground.4geeks.com/todo/users/${user}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then((response) => response.json())
	.then((data) => {
		console.log("Usuario creado:", data);
	})
	.catch((error) => console.log(error));
};

	// Cargar tareas al iniciar
	useEffect(() => {
useEffect(() => {
	createUser();
	getTasks();
}, []);
		getTasks();

	}, []);



	const getTasks = () => {

		fetch(`https://playground.4geeks.com/todo/todos/${user}`)
			.then((response) => response.json())
			.then((data) => {

				setTasks(data);

			})
			.catch((error) => console.log(error));

	};



	// Crear tarea
	const addTask = (event) => {

		if (event.key === "Enter" && input.trim() !== "") {


			const newTask = {

				label: input,
				is_done: false

			};



			fetch(`https://playground.4geeks.com/todo/todos/${user}`, {

				method: "POST",

				body: JSON.stringify(newTask),

				headers: {

					"Content-Type": "application/json"

				}

			})

			.then((response) => response.json())

			.then(() => {

				setInput("");

				getTasks();

			})

			.catch((error) => console.log(error));

		}

	};



	// Eliminar una tarea
	const deleteTask = (id) => {


		fetch(`https://playground.4geeks.com/todo/todos/${user}/${id}`, {

			method: "DELETE"

		})

		.then(() => {

			getTasks();

		})

		.catch((error) => console.log(error));


	};



	// Eliminar todas las tareas
	const deleteAll = () => {


		fetch(`https://playground.4geeks.com/todo/todos/${user}`, {

			method: "DELETE"

		})

		.then(() => {

			setTasks([]);

		})

		.catch((error) => console.log(error));


	};



	return (

		<div className="todo-container">


			<h1>todos</h1>


			<input

				className="todo-input"

				type="text"

				placeholder="What needs to be done?"

				value={input}

				onChange={(e) => setInput(e.target.value)}

				onKeyDown={addTask}

			/>



			<ul>


				{
					tasks.length === 0 ?

					<li className="empty">

						No hay tareas, añadir tareas

					</li>


					:

					tasks.map((task) => (

						<TodoItem

							key={task.id}

							task={task}

							deleteTask={deleteTask}

						/>

					))

				}


			</ul>



			<div className="counter">

				{tasks.length} tareas pendientes


				<button

					className="btn btn-danger ms-3"

					onClick={deleteAll}

				>

					Borrar todas

				</button>


			</div>


		</div>

	);

};


export default TodoList;