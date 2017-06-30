game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 0;

game.start = function()
{
    scene.setScene();
    game.startTime = Date.now();
    input.start();
    game.main();
};

// The main game loop
game.main = function() 
{ 
    if (game.isOver == false)
    {
        game.update();
        renderer.draw();
        window.requestAnimationFrame(game.main);
    }

};

// Update game objects
game.update = function() 
{
    player.move(input.x, input.y);

    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) )
        {
            game.isOver = true;
        }
    }
};

