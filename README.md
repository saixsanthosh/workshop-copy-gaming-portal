# Gaming Portal

A premium gaming portal with a stunning space-themed interface featuring 2000+ animated space elements.

## 🎮 Available Games

Currently includes 6 fully functional games:
1. **Tetris** - Classic block-stacking puzzle with rotation and line clearing
2. **Snake** - Guide the snake to eat food and grow longer
3. **Space Invaders** - Shoot down waves of alien invaders
4. **Memory Game** - Flip cards and match pairs
5. **Chess** - Classic strategy game with AI
6. **Snakes & Ladders** - Roll the dice and climb to victory

## 🚀 How to Add New Games

### Step 1: Create the Game File
Create a new HTML file in the `games/` folder:
```
games/your-game-name.html
```

### Step 2: Add Game Card to Dashboard
Open `dashboard.html` and add a new game card in the `games-grid` section:

```html
<div class="game-card" onclick="playGame('your-game-name')">
    <div class="game-thumbnail">
        <div class="game-icon your-game-icon">🎯</div>
    </div>
    <div class="game-content">
        <div class="game-title">Your Game Name</div>
        <div class="game-description">Brief description of your game</div>
        <button class="play-btn">Play Now →</button>
    </div>
</div>
```

### Step 3: Choose an Icon/Emoji
Replace `🎯` with any emoji that represents your game:
- 🎲 Dice games
- 🃏 Card games
- 🏓 Sports games
- 🎯 Target/shooting games
- 🧩 Puzzle games
- 🎪 Arcade games
- 🎨 Creative games
- 🏎️ Racing games

### Step 4: Add Custom Animation (Optional)
Add a custom CSS animation for your game icon in the `<style>` section:

```css
.your-game-icon { 
    animation: your-animation 3s ease-in-out infinite; 
}

@keyframes your-animation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}
```

### Step 5: Add Badges (Optional)
Add trending or popular badges:

```html
<div class="trending-badge">🔥 Hot</div>
<!-- or -->
<div class="trending-badge">⭐ Popular</div>
```

## 🎨 Game Template Structure

Use this template for new game files:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Game Name</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .game-container {
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 600px;
            width: 100%;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        }

        h1 {
            color: white;
            font-size: 2.5em;
            margin-bottom: 5px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            letter-spacing: 2px;
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1em;
            font-weight: 300;
        }

        .controls {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        button {
            padding: 12px 30px;
            font-size: 1em;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            font-family: 'Poppins', sans-serif;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #e0e0e0;
            color: #333;
        }

        .btn-secondary:hover {
            background: #d0d0d0;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="game-container">
        <div class="header">
            <h1>YOUR GAME NAME</h1>
            <div class="subtitle">Game Tagline</div>
        </div>

        <!-- Your game content here -->

        <div class="controls">
            <button class="btn-primary" onclick="startGame()">Start Game</button>
            <button class="btn-secondary" onclick="window.location.href='../dashboard.html'">Back to Dashboard</button>
        </div>
    </div>

    <script>
        function startGame() {
            // Your game logic here
        }
    </script>
</body>
</html>
```

## 🌟 Features

- **2000+ Space Elements**: Stars, nebulas, galaxies, planets, moons, comets, cosmic dust
- **Ultra-Transparent Glass Cards**: See the beautiful space background through the UI
- **Smooth Animations**: All elements independently animated
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Optimized for the space background

## 📝 How to Run

1. Open `login.html` in your browser
2. Login with any method (GitHub, Google, Email, or Guest)
3. Browse and play games from the dashboard

## 🎯 Future Game Ideas

- Pac-Man
- Flappy Bird
- Pong
- Breakout
- 2048
- Solitaire
- Whack-a-Mole
- Tic-Tac-Toe
- Minesweeper
- Sudoku

---

Built with ❤️ for gamers
