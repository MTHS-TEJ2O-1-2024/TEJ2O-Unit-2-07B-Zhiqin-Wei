/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: oct
 * This program ...
*/

// Happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let count = 0

input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
