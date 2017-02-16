let create = function() {
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
}