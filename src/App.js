import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results);
      });
  });

  const [isOpen, setIsOpen] = useState(false);
  const [character, setCharacter] = useState();

  const show = (char) => {
    setIsOpen(true);
    setCharacter(char);
  }

  const hide = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <ul className='characters'>
        {characters.map((character, index) => {
          return <li key={index} onClick={() => show(character)}>
            <img src={character.image} />
            <p>{character.name}</p>
          </li>
        })}
      </ul>
      {isOpen && (
        <div className='modal'>
          <div>
            {character.name}
            <span className='close' onClick={hide}>X</span>
          </div>
          <p>Status: {character.status}</p>
          <p>Origem: {character.origin.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
