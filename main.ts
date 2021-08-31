input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(5000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
basic.showString("¡HOLA!")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
})
