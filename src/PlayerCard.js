import React from 'react'
import './PlayerCard.css'

export default function PlayerCard ({
  player,
  setBid,
  setScore,
  setName,
  removePlayer
}) {
  const { id, name, bid, score, prevScore } = player
  const changeBid = delta => setBid(id, bid + delta)
  const changeScore = delta => setScore(id, score + delta)
  const changeName = event => setName(id, event.target.value)

  const scoreDiff = score - prevScore
  const diffClass = scoreDiff > 0 ? 'green' : scoreDiff < 0 ? 'red' : ''

  return (
    <section className='PlayerCard'>
      <button className='deleteButton' onClick={() => removePlayer(id)}>
        &times;
      </button>

      <input
        type='text'
        value={name}
        onChange={changeName}
        className='name isEditing'
      />
      <div>
        <button onClick={() => changeBid(-1)}>- 1</button>{' '}
        <button onClick={() => changeBid(-10)}>- 10</button> Bid: {bid}{' '}
        <button onClick={() => changeBid(1)}>+ 1</button>{' '}
        <button onClick={() => changeBid(10)}>+ 10</button>
      </div>
      <div>
        <button onClick={() => changeScore(-1)}>- 1</button>{' '}
        <button onClick={() => changeScore(-10)}>- 10</button> Score: {score}{' '}
        <button onClick={() => changeScore(1)}>+ 1</button>{' '}
        <button onClick={() => changeScore(10)}>+ 10</button>
      </div>
      <div className={diffClass}>This round: {scoreDiff}</div>
    </section>
  )
}
