let preload = function() {
    game.load.tilemap(
        'the_arena', 
        'assets/maps/the_arena.json', 
        null,
        Phaser.Tilemap.TILED_JSON
    );
    
    game.load.image('tiles', 'assets/sprites/dungeon_spritesheet_v01-01.png');

    game.stage.backgroundColor = '#EEE';

    game.load.image(
        'player', 
        'https://lh3.googleusercontent.com/acpxNucCG81rj2Kn7GhPCXGajJoqawlXz__X2h6qhCga-X571mofxFloQniVur2SS-HvOcc=s85'
    );
}