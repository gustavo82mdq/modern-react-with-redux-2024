import './SearchBar.css'
import {useState} from "react";

export default function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Enter Search Term:</label>
                <input onChange={handleChange} value={term}/>
            </form>
        </div>
    )
}