// src/object.ball.js

// Function that returns the game object
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: [
          {
            name: "Alan Anderson",
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          {
            name: "Reggie Evans",
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          {
            name: "Brook Lopez",
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          {
            name: "Mason Plumlee",
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          {
            name: "Jason Terry",
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        ]
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: [
          {
            name: "Jeff Adrien",
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          {
            name: "Bismak Biyombo",
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          {
            name: "DeSagna Diop",
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          {
            name: "Ben Gordon",
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          {
            name: "Brendan Haywood",
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        ]
      }
    };
  }
  
  // Function to get a player's points
  function numPointsScored(playerName) {
    let game = gameObject();
  
    for (let team in game) {
      for (let player of game[team].players) {
        if (player.name === playerName) {
          return player.points;
        }
      }
    }
  }
  
  // Function to get a player's shoe size
  function shoeSize(playerName) {
    let game = gameObject();
  
    for (let team in game) {
      for (let player of game[team].players) {
        if (player.name === playerName) {
          return player.shoe;
        }
      }
    }
  }
  
  // Function to get team colors
  function teamColors(teamName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // Function to get team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to get player numbers of a team
  function playerNumbers(teamName) {
    let game = gameObject();
  
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].players.map(player => player.number);
      }
    }
  }
  
  // Function to get player stats
  function playerStats(playerName) {
    let game = gameObject();
  
    for (let team in game) {
      for (let player of game[team].players) {
        if (player.name === playerName) {
          let { name, ...stats } = player;
          return stats;
        }
      }
    }
  }
  
  // Function to find the player with the largest shoe size and return their rebounds
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
  
    for (let team in game) {
      for (let player of game[team].players) {
        if (player.shoe > largestShoe) {
          largestShoe = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    return rebounds;
  }
  