import { useState } from 'react';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const [title, setTitle] = useState('React Essentials');
    const description = reactDescriptions[getRandomInt(2)];

    function handleClick() {
        if (title === 'React Essentials') setTitle("Let's learn React");
        else setTitle('React Essentials');
    }

    return (
        <header>
            <img
                src={reactImg}
                alt="Stylized atom"
            />
            <h1>{title}</h1>
            <button
                id="my-button"
                onClick={handleClick}
            >
                Change title
            </button>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

export default Header;
