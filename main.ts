let lights0n = false
input.onSound(DetectedSound.Loud, function () {
    lights0n = !(lights0n)
    if (lights0n) {
    	
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
    }
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 4)
})
