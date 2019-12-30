# Score Keeper

A React hooks demo app with minimal styling applied.

## Notable Changes

### Simplified logic

- all state is managed at the top "App" component level
- player state management was extracted to a custom hook simply to clean up the code and improve readability
- all state and function props are being passed down the tree a maximum of one level
- each player has a current score and a previous score, making the diff a simple calculation for the presentational component.
- when the "next round" button is pressed, all scoring changes are locked in. Each player's `prevScore` is set their current `score`, and all bids are reset to zero.
- scoreCards will resort (highest to lowest) based on prevScore
- no Refs required
- no Context API required
- no Redux required

### Simplified UI

- no router required
- a new score card is immediately visible when new players are added
- player name is directly editable on the score card
- player can be removed by clicking the close button on the score card
