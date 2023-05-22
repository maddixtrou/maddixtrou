var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    window.levelData = levelData;

    for (var i = 0; i < levelData.gameItems.length; i++) {
      var eachItem = levelData.gameItems[i];
      if (eachItem.type === "sawBlade") {
        createSawBlade(550, 350);
        createSawBlade(340, 500);
        createSawBlade(400, 600);
        createSawBlade(380, 800);
      }
      if (eachItem.type === "brokenHeart"){
        brokenHeart(400, 300);
        brokenHeart(600, 500);
      }
    if (eachItem.type === "enemy"){
      createEnemy(900, groundY - 400);
      createEnemy(1200, groundY - 500);
      createEnemy(1600, groundY - 600);
    }
    if (eachItem.type === "reward"){
      createReward(800, groundY - 450);
      createReward(1500, groundY - 550);
    }
  };

  var levelData = {
    name: "Henry",
    number: 1,
    speed: -3
    gameItems: [
      { type: "sawBlade", x:550, y:350 },
      { type: "sawBlade", x:340, y:500 },
      { type: "sawBlade", x:400, y:600 },
      { type: "sawBlade", x:300, y:800 },
      { type: "brokenHeart", x:400, y:300 },
      { type: "brokenHeart", x:600, y:500 },
      { type: "enemy", x:900, y:- 400 },
      { type: "enemy", x:1200, y:- 500 },
      { type: "enemy", x:1600, y:- 600 },
      { type: "reward", x:800, y:- 450}
      { type: "reward", x:1500, y:- 550},
    ],
  };

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
    }


    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);

    }
    createSawBlade(900, 450);
    createSawBlade(700, 500);
    createSawBlade(1100, 450);
    createSawBlade(1400, 500);
    createSawBlade(1600, 450);
    // TODO 13 goes below here



    //////////////////////////////////////////////
    // DO NOT EDIT CODE BELOW HERE
    //////////////////////////////////////////////
    if (++currentLevel === levelData.length) {
      startLevel = () => {
        console.log("Congratulations!");
      };
    }

    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
