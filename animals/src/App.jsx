import {useState} from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['cow', 'horse', 'dog', 'bird', 'cat', 'gator']

    return animals[Math.floor(Math.random() * animals.length)]
}

export default function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    })

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>
                {renderedAnimals}
            </div>
        </div>
    )
}