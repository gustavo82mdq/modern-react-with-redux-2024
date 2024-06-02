import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import bird from './svg/bird.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import {useState} from "react";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

export default function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1)
    };
    return (
        <div onClick={handleClick}>
            <img alt={type} src={svgMap[type]} />
            <img alt="heart" src={heart} style={{width: 10 + 10 * clicks}}/>
        </div>
    )
}