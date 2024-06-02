import {createContext, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const books = await axios.get("http://localhost:3001/books");
        setBooks(books.data)
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {title: title})
        const updatedBooks = [
            ...books, response.data]

        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const deletedBooks = books.filter((book) => book.id !== id);
        setBooks(deletedBooks);
    }

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title: title})

        const editedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(editedBooks);
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext;