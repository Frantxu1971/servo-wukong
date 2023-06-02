input.onButtonPressed(Button.A, function () {
    angulo += 15
})
input.onButtonPressed(Button.AB, function () {
    angulo = 0
})
input.onButtonPressed(Button.B, function () {
    angulo += -15
})
let angulo = 0
angulo = 0
basic.forever(function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, angulo)
})
