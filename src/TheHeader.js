import React from 'react'

export default function TheHeader (props) {
  return (
    <header style={styles.container}>
      <span></span>
      <h1 style={styles.pageTitle}>Score Keeper</h1>
      <button style={styles.newPlayerButton} onClick={() => props.addPlayer()}>
        <span aria-hidden={true}>+</span> New Player
      </button>
    </header>
  )
}

const styles = {
  container: {
    backgroundColor: 'hsl(220, 50%, 35%)',
    padding: '0.5rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gridGap: '0.5rem',
    boxShadow: '0 2px 6px 0 hsl(220, 15%, 70%)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  pageTitle: {
    fontSize: '1.1rem',
    color: 'white'
  },
  newPlayerButton: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    padding: '0.5rem 1rem',
    fontWeight: 600,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.25px',
    justifySelf: 'end'
  }
}
