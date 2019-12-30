import React from 'react'

export default function TheHeader () {
  return (
    <header style={styles.container}>
      <h1 style={styles.pageTitle}>Score Keeper</h1>
    </header>
  )
}

const styles = {
  container: {
    backgroundColor: 'hsl(220, 50%, 35%)',
    padding: '0.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: '1.1rem',
    color: 'white'
  }
}
