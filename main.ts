controller.combos.attachCombo("", function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.combos.detachCombo("")
})
music.play(music.stringPlayable("A - - - - - G - ", 120), music.PlaybackMode.UntilDone)
