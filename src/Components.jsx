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

export const Card = () => {
    return(
        <button>Card1</button>
    )
}

export const Cards = () => {
    let cards = []
    
}
