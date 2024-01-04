export const Todos = ({todos}) => {
    return (
        <>
        {todos.map(todo => 
            <>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>
                    {todo.completed ? "Completed" : "Mark as completed"}
                </button>
            </>
        )}
            
        </>
    )
}