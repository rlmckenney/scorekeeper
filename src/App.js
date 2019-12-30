import React, { useState } from 'react'
import TheHeader from './TheHeader'
import PlayerCard from './PlayerCard'
import './App.css'

const initialState = new Map([
  [
    1,
    {
      id: 1,
      name: 'Robert',
      bid: 0,
      score: 0,
      prevScore: 0
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'Stephen',
      bid: 0,
      score: 0,
      prevScore: 0
    }
  ]
])

function App () {
  const [players, setPlayers] = useState(initialState)
  const [round, setRound] = useState(1)

  const setPlayerBid = (playerId, amount) => {
    const newState = new Map([...players])
    const newPlayer = newState.get(playerId)
    newPlayer.bid = amount
    newState.set(playerId, newPlayer)
    setPlayers(newState)
  }
  const setPlayerScore = (playerId, amount) => {
    const newState = new Map([...players])
    const newPlayer = newState.get(playerId)
    newPlayer.score = amount
    newState.set(playerId, newPlayer)
    setPlayers(newState)
  }
  const incrementRound = () => {
    setRound(r => r + 1)
    const newPlayers = new Map([...players])
    newPlayers.forEach(player => (player.prevScore = player.score))
    setPlayers(newPlayers)
  }

  return (
    <div className='App'>
      <TheHeader />
      <main>
        <h2>Round {round}</h2>
        <div className='card-grid'>
          {[...players.values()].map(p => (
            <PlayerCard
              key={p.id}
              player={p}
              setBid={setPlayerBid}
              setScore={setPlayerScore}
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
