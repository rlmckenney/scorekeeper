import React, { useState } from 'react'
import TheHeader from './TheHeader'
import PlayerCard from './PlayerCard'
import usePlayers from './usePlayers'
import './App.css'

function App () {
  const {
    players,
    setPlayerBid,
    setPlayerScore,
    startNextRound,
    addPlayer,
    removePlayer,
    setPlayerName
  } = usePlayers()
  const [round, setRound] = useState(1)

  const incrementRound = () => {
    setRound(r => r + 1)
    startNextRound()
  }

  return (
    <div className='App'>
      <TheHeader addPlayer={addPlayer} />
      <main>
        <h2>Round {round}</h2>
        <div className='card-grid'>
          {[...players.values()].map(p => (
            <PlayerCard
              key={p.id}
              player={p}
              setBid={setPlayerBid}
              setScore={setPlayerScore}
              setName={setPlayerName}
              removePlayer={removePlayer}
            />
          ))}
        </div>
        <button className='button isPrimary' onClick={incrementRound}>
          Next Round
        </button>
      </main>
    </div>
  )
}

export default App
