import { useState } from "react"
import "./CreateTodo.css"

export const CreateTodo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const postTodo = async () => {
        const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const responseJson = await response.json();
        alert("Todo added");
    }

    return (
        <>
            <input type="text" placeholder="title" onChange={titleHandler} /> <br />
            <input type="text" placeholder="description" onChange={descriptionHandler} /> <br />

            <button onClick={postTodo}>Add a todo</button>
        </>
    )
}