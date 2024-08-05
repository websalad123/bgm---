controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.combos.detachCombo("")
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(assets.song`BGM`), music.PlaybackMode.UntilDone)
})
forever(function () {
    music.play(music.stringPlayable("- E - - G A - - ", 120), music.PlaybackMode.UntilDone)
})
