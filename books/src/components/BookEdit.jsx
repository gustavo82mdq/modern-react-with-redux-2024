import {useContext, useState} from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title)

    const {editBookById} = useContext(BooksContext)

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        editBookById(book.id, title)
        onSubmit();
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input className="input" onChange={handleChange} value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}