let map;
let tileset;
let layer;
let player;
let walls;
let cursors;

var States = {
    preload: function() { 
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
    },
    create : function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        map = game.add.tilemap('simplemap');
        map.addTilesetImage('simplemap', 'tiles');
        layer = map.createLayer('camada');
        layer.resizeWorld();
        player = game.add.sprite(100, 400, 'player');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        walls = game.add.physicsGroup();
        
        walls.create(0, 140, 'wall');
        walls.create(400, 345, 'wall');
        walls.create(400, 430, 'wall');
        walls.setAll('body.immovable', true);

        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function() {
        game.physics.arcade.collide(player, walls);

        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        if (cursors.left.isDown) {
            player.body.velocity.x = -250;
        }
        
        if (cursors.right.isDown) {
            player.body.velocity.x = 250;
        }

        if (cursors.up.isDown) {
            player.body.velocity.y = -250;
        }
        
        if (cursors.down.isDown) {
            player.body.velocity.y = 250;
        }
    },
    render: function() {}
}