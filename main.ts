scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    Ataca = 1
    info.startCountdown(10)
    music.play(music.stringPlayable("D F E D G B C5 A ", 176), music.PlaybackMode.LoopingInBackground)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 f f f 5 5 5 f 5 5 5 5 5 . 
        5 5 5 1 f f 5 5 5 f 5 5 5 5 5 . 
        . 5 5 f f f 5 5 5 f 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 f 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 f 5 5 5 . . . 
        . . . . 5 5 5 5 5 f 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 f f f 5 5 f 5 5 5 5 5 5 . 
        5 5 5 1 f f 5 5 f 5 5 5 5 5 5 . 
        . 5 5 f f f 5 5 f 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 f 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 f 5 5 5 5 . . . 
        . . . . 5 5 5 5 f 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 . . . 5 5 5 5 
        . 5 5 5 f f f 5 5 . . . 5 5 5 5 
        . 5 5 5 f f f 5 5 . . . . 5 5 5 
        . . 5 5 f 1 f 5 5 . . . . . 5 . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 f 1 f 5 5 . . 
        5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 f f f f f f f . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 f 1 f 5 5 . . 
        5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 f f f f f f . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 f f f 5 5 . 
        . 5 5 5 5 5 5 5 5 5 f f 1 5 5 5 
        . 5 5 5 5 5 5 5 5 5 f f f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(img`
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 f 1 f 5 5 5 5 5 5 5 5 . 
        . 5 5 5 f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . f f f f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 f 1 f 5 5 5 5 5 5 5 5 . 
        . 5 5 5 f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . f f f f f f 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 f f f 5 5 5 5 5 5 5 5 . . 
        5 5 5 1 f f 5 5 5 5 5 5 5 5 5 . 
        5 5 5 f f f 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . . . . . . 5 5 5 5 5 5 5 . 
        . . . . . . . . 5 5 5 5 5 5 5 . 
        . . . . . . . 5 5 5 5 5 5 5 5 . 
        . . . . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        `],
    500,
    true
    )
})
info.onCountdownEnd(function () {
    Ataca = 0
    music.stopAllSounds()
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    PacMan.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 f 5 5 5 5 5 . . . . 
        . . . 5 5 5 f 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 f 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 f 5 5 5 f f f 5 5 . 
        . 5 5 5 5 5 f 5 5 5 f f 1 5 5 5 
        . 5 5 5 5 5 f 5 5 5 f f f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        `)
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 f 5 5 5 5 . . . . 
        . . . 5 5 5 5 f 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 f 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 f 5 5 f f f 5 5 . 
        . 5 5 5 5 5 5 f 5 5 f f 1 5 5 5 
        . 5 5 5 5 5 5 f 5 5 f f f 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . 5 5 5 5 5 5 5 . . 
        . 5 . . . . . 5 5 f 1 f 5 5 . . 
        5 5 5 . . . . 5 5 f f f 5 5 5 . 
        5 5 5 5 . . . 5 5 f f f 5 5 5 . 
        5 5 5 5 . . . 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 . . 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 10
    sprites.destroy(otherSprite, effects.hearts, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Ataca == 0) {
        statusbar.value += -30
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    } else {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    }
})
let statusbar: StatusBarSprite = null
let PacMan: Sprite = null
let Ataca = 0
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
Ataca = 0
PacMan = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 f f f 3 3 . 
    . 3 3 3 3 3 3 3 3 3 f f 1 3 3 3 
    . 3 3 3 3 3 3 3 3 3 f f f 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(PacMan)
controller.moveSprite(PacMan, 100, 100)
PacMan.setPosition(64, 32)
PacMan.setBounceOnWall(true)
animation.runImageAnimation(
PacMan,
[img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 f 1 f 5 5 . . 
    5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
    5 5 5 5 5 5 5 5 5 f f f 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 f f f f f f . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 f f f 5 5 . 
    . 5 5 5 5 5 5 5 5 5 f f 1 5 5 5 
    . 5 5 5 5 5 5 5 5 5 f f f 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    `],
500,
true
)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.attachToSprite(PacMan, 0, 1)
let Fantasma1 = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 . 1 1 1 . 1 1 1 . 1 1 1 1 
    . 1 . . . 1 . . . 1 . . . 1 . . 
    `, SpriteKind.Enemy)
Fantasma1.setPosition(randint(320, 352), randint(240, 304))
Fantasma1.setBounceOnWall(true)
Fantasma1.setVelocity(50, 50)
let Fantasma2 = sprites.create(img`
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    8 8 8 8 f 8 8 8 8 8 f 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 f f f 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 . 8 8 8 . 8 8 8 . 8 8 8 8 
    . 8 . . . 8 . . . 8 . . . 8 . . 
    `, SpriteKind.Enemy)
Fantasma2.setPosition(randint(320, 352), randint(240, 304))
Fantasma2.setBounceOnWall(true)
Fantasma2.setVelocity(50, 50)
let Fantasma3 = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 f 2 2 2 2 2 2 2 f 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
    . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
    . . 2 . . . 2 . . . 2 . . . 2 . 
    `, SpriteKind.Enemy)
Fantasma3.setPosition(randint(320, 352), randint(240, 304))
Fantasma3.setBounceOnWall(true)
Fantasma3.setVelocity(50, 50)
let Fantasma_4 = sprites.create(img`
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f f 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 
    . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 
    . . 7 . . . 7 . . . 7 . . . 7 . 
    `, SpriteKind.Enemy)
Fantasma_4.setPosition(randint(320, 352), randint(240, 304))
Fantasma_4.setBounceOnWall(true)
Fantasma_4.setVelocity(50, 50)
let COMIDA_1 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
COMIDA_1.setPosition(randint(0, 784), randint(32, 656))
COMIDA_1.setBounceOnWall(true)
let COMIDA_2 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
COMIDA_2.setPosition(randint(0, 784), randint(32, 656))
COMIDA_2.setBounceOnWall(true)
let COMIDA_3 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
COMIDA_3.setPosition(randint(0, 784), randint(32, 656))
COMIDA_3.setBounceOnWall(true)
forever(function () {
    if (info.score() == 100) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
    if (PacMan.x == 793) {
        PacMan.x = 32
    }
    if (PacMan.x == 7) {
        PacMan.x = 785
    }
})
