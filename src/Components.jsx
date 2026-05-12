import { useEffect, useState } from "react";

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {
      const ids = [];

      while (ids.length < 12) {
        const randomId = Math.floor(Math.random() * 300) + 1;

        if (!ids.includes(randomId)) {
          ids.push(randomId);
        }
      }

      const promises = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json(),
        ),
      );

      const data = await Promise.all(promises);

      const formatted = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      }));

      setCards(formatted);
    }
    fetchPokemon();
  }, []);

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
        setScore(score + 1);
        if (score >= highscore) {
          setHighscore(score + 1);
        }
      setClickedCards(...clickedCards, id);
    }
    clickedCards.push(id);
    setClickedCards(clickedCards);
  };

  return (
    <div className="container">
      <div className="scoreBoard">
        <h2>MemoryCard Game</h2>
        <p>{score}</p>
        <p>{highscore}</p>
      </div>
      <div className="cards-container">
        {cards.map((pokemon) => (
          <button
            key={pokemon.id}
            className="cards"
            onClick={() => handleClick(pokemon.id)}
          >
            <img src={pokemon.image} alt={pokemon.name}></img>
          </button>
        ))}
      </div>
    </div>
  );
};
