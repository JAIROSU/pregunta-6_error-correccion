input.onButtonPressed(Button.A, function () {
    while (MiVariable < 4) {
        MiVariable += 1
        basic.showNumber(MiVariable)
    }
})
let MiVariable = 0
MiVariable = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        MiVariable += 1
        basic.showNumber(MiVariable)
    }
})
