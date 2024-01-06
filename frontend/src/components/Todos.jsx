export const Todos = ({todos}) => {
    const markTodoCompleted = async (id) => {
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        const responseJson = await response.json()
        alert("Todo updated. Click on Get todos to see latest todos")
    }
    return todos.map(todo => {
            return (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => markTodoCompleted(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as completed"}
                    </button>
                </div>
            )
        }
        )
}