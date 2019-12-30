import { useState } from 'react'

const defaultState = new Map([
  [
    1,
    {
      id: 1,
      name: 'Player 1',
      bid: 0,
      score: 0,
      prevScore: 0
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'Player 2',
      bid: 0,
      score: 0,
      prevScore: 0
    }
  ]
])

export default function usePlayers (initialState = defaultState) {
  const [players, setPlayers] = useState(initialState)

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
  const startNextRound = () => {
    const newPlayers = new Map([...players])
    newPlayers.forEach(player => {
      player.prevScore = player.score
      player.bid = 0
    })
    setPlayers(newPlayers)
  }
  const addPlayer = name => {
    const player = {
      id: Math.max(...[...players.keys()]) + 1,
      name: name,
      bid: 0,
      score: 0,
      prevScore: 0
    }
    const newPlayers = new Map([...players])
    newPlayers.set(player.id, player)
    setPlayers(newPlayers)
  }
  const setPlayerName = (id, name) => {
    const newPlayers = new Map([...players])
    const player = newPlayers.get(id)
    player.name = name
    newPlayers.set(id, player)
    setPlayers(newPlayers)
  }

  return {
    players,
    setPlayerBid,
    setPlayerScore,
    startNextRound,
    addPlayer,
    setPlayerName
  }
}
