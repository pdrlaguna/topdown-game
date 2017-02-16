let preload = function() {
    game.load.tilemap(
        'simplemap', 
        'simplemap.json', 
        null,
        Phaser.Tilemap.TILED_JSON
    );
    
    game.load.image(
        'tiles',
        'assets/tilemaps/tiles/kenny_ground_64x64.png' 
    );

    game.stage.backgroundColor = '#EEE';

    game.load.image(
        'player', 
        'https://lh3.googleusercontent.com/acpxNucCG81rj2Kn7GhPCXGajJoqawlXz__X2h6qhCga-X571mofxFloQniVur2SS-HvOcc=s85'
    );

    game.load.image(
        'wall', 
        'https://lh3.googleusercontent.com/fX8LPu04AjgOWBhpeWI89upHImnibG1ylTGVLXYKQQaYy-vWcqDGWyx0aHAKj3bGjRQ2Qg=s85'
    );
}