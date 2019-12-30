import React from 'react'
import './PlayerCard.css'

export default function PlayerCard ({ player, setBid, setScore }) {
  const { id, name, bid, score, prevScore } = player
  const changeBid = delta => setBid(id, bid + delta)
  const changeScore = delta => setScore(id, score + delta)

  return (
    <section className='PlayerCard'>
      <h3>{name}</h3>
      <div>
        <button onClick={() => changeBid(-1)}>- 1</button>{' '}
        <button onClick={() => changeBid(-10)}>- 10</button> Bid: {bid}{' '}
        <button onClick={() => changeBid(1)}>+ 1</button>{' '}
        <button onClick={() => changeBid(10)}>+ 10</button>
      </div>
      <button onClick={() => changeScore(-1)}>- 1</button>{' '}
      <button onClick={() => changeScore(-10)}>- 10</button> Score: {score}{' '}
      <button onClick={() => changeScore(1)}>+ 1</button>{' '}
      <button onClick={() => changeScore(10)}>+ 10</button>
      <div>Change: {score - prevScore}</div>
    </section>
  )
}
