# Games-OOP

An interactive and user-friendly **Games-OOP** application built with **HTML**, **CSS**, and **JavaScript**. This project uses the **Free to Play Games Database API** to fetch game details based on the user's selected genre and displays a collection of free-to-play games. Users can view game details upon selection and explore various game genres.

## Features

### Game Selection by Genre
- Allows users to select games based on genres from a navigation bar.
- Supports multiple genres such as Action, Adventure, RPG, Strategy, etc.

### Game Details
- When a user clicks on a game, a detailed section appears showing more information about the game.
- Includes game title, genre, platforms, release date, developer, and a brief description.

### Responsive Design
- Fully optimized for both desktop and mobile devices.
- Clean and easy-to-use interface for navigating through game genres and viewing details.

## Technologies Used

- **HTML5**: For structuring the application.
- **CSS3**: For styling and layout.
- **JavaScript**: For fetching data from the API, handling interactivity, and displaying game information.
- **Bootstrap**: For responsive design and layout styling.

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

## How It Works

### Genre Selection Workflow
1. Users select a genre from the navigation bar (e.g., Action, RPG, Strategy).
2. The app fetches games from the **Free to Play Games Database API** based on the selected genre.
3. A list of games for the selected genre is displayed.

### Game Details Workflow
1. When a user clicks on a game, the app fetches and displays detailed information about the game.
2. Details include:
   - Game title
   - Genre
   - Platforms
   - Release date
   - Developer
   - Description

### Example Code for API Request
Here’s an example of how the app fetches data based on genre selection:

```javascript
const API_KEY = "YOUR_RAPIDAPI_KEY_HERE";
const apiUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY
  }
};

// Fetch games based on selected genre
function fetchGamesByGenre(genre) {
  const url = `${apiUrl}?genre=${genre}`;

  fetch(url, options)
    .then(response => response.json())
    .then(data => displayGames(data))
    .catch(err => console.error(err));
}

