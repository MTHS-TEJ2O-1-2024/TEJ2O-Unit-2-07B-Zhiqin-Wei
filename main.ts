/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daly Wei
 * Created on: oct 2024
 * This program Add Numbers
*/

// Happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let count = 0

input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
