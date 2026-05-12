import {useEffect} from "react"
export const Score = () => {

    //if(currentScore > highestScore) highestScore = currentScore;
    const currentScore = 10;
    const highestScore = 20;
    return(
        <>
            <h2>MemoryCard Game</h2>
            <p>{currentScore}</p>
            <p>{highestScore}</p>
        </>
    )
}

export const Cards = () => {

    const [cards, setCards] = useState([])
    const [clickedCards, setClickedCards] = useState([])
    const [score, SetScore] = useState(0)
    const [highscore, setHighscore] = useState(0)

    useEffect(() => {
        async function fetchPokemon(){
            const ids = [1,2,3,4,5,6,7,8,9,10,11,12]

            const promises = ids.map(ids => 
                fetch(`https://pokeapi.co/api/v2/pokemon/${ids}`)
                .then(res => res.json)
            )

            const data = await Promise.all(promises)

            const formatted = data.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default
            }))

            setCards(formatted)
        }
    }, [])

    console.log(cards)

}
