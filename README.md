World Cup Scoreboard App
This is a React app that simulates live football matches with real-time score updates.

Components
WorldCupScoreboard:
Displays a list of ongoing matches with live score updates. Each match shows the home and away teams, the current score, and the match status (Pending, Playing, Finished).

GameSummary:
Provides a summary of all matches, sorted by total score. If two matches have the same total score, the match that was added later to the system is shown first.

Hooks
useGameFlow:
Manages the game state (starting, playing, and finishing games).

useScoreUpdater:
Updates the score for games while they are in the "Playing" state.

useRandomTimeout:
Adds random delays to the game flow for a more dynamic experience.

Context
GameContext:
Stores and manages the state of all games using the useContext and useReducer hooks.
Styling
I've added basic styling to the components to ensure readability and a presentable UI. Due to time constraints, the layout is kept simple and clean.

Tests
Each component is tested to ensure that the game flow and updates work correctly.

How it Works
Games automatically transition from "Pending" to "Playing" with random start and finish times.
While games are "Playing," scores are updated randomly every few seconds.
Once a game finishes, it disappears from the scoreboard.
When all games have finished, the Game Summary ranks matches by total score and entry order.
