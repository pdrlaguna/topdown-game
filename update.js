let update = function() {
    game.physics.arcade.collide(player, walls);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 250;
    }

    if (cursors.up.isDown) {
        player.body.velocity.y = -250;
    } else if (cursors.down.isDown) {
        player.body.velocity.y = 250;
    }
}