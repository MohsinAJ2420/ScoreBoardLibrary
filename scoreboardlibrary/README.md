World Cup Scoreboard App
This is a React app that simulates live football matches with real-time score updates.

Components:
WorldCupScoreboard: Displays a list of ongoing matches with live score updates. Each match shows the home and away teams, the current score, and the match status (Pending, Playing, Finished).

GameSummary: Provides a summary of all matches, sorted by total score. If two matches have the same total score, the match that was added later to the system is shown first.

Hooks:

useGameFlow: Manages the game state (starting, playing, and finishing games).
useScoreUpdater: Updates the score for games while they're in the "Playing" state.
useRandomTimeout: Adds random delays to the game flow for a more dynamic experience.
GameContext: Stores and manages the state of all games ,I have used useContext

Styling:
I’ve added some basic styling to the components to ensure everything is readable and presentable. Due to time constraints, I focused on keeping the layout simple and clean.

Tests:
Each component is tested .

How it Works:
Games move from "Pending" to "Playing" automatically with random start and finish times.
While games are "Playing," scores update randomly every few seconds.
Once a game is finished ,it disappear from scoreboard
When All games are finsihed ,The Game Summary ranks matches by total score.