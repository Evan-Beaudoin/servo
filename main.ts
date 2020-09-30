// #Created By: Evan
// 
// #Created on: Sept. 2020
// 
// #This program: Moves servo in a continuous 
// 
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
})
