let create = function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('the_arena');
    map.addTilesetImage('dungeon_spritesheet_v01-01', 'tiles');
    

    floorLayer = map.createLayer('FLOORS');
    wallsLayer = map.createLayer('WALLS');
    shadowLayer = map.createLayer('SHADOWS');

    floorLayer.scale.set(2);
    wallsLayer.scale.set(2);
    shadowLayer.scale.set(2);

    floorLayer.resizeWorld();
    wallsLayer.resizeWorld();
    shadowLayer.resizeWorld();

    floorLayer.smoothed = false;
    wallsLayer.smoothed = false;
    shadowLayer.smoothed = false;

    player = game.add.sprite(200, 300, 'player');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    wallsLayer = game.add.physicsGroup();
    wallsLayer.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
}