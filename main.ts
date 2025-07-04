radio.onReceivedString(function (receivedString) {
    reply = "EXOPLANET 1 "
    if (hasCH4 == 1) {
        reply = "" + reply + "X321"
    }
    if (hasCO2 == 1) {
        reply = "" + reply + "Z449"
    }
    if (hasH20 == 1) {
        reply = "" + reply + "M930"
    }
    if (hasO2 == 1) {
        reply = "" + reply + "H165"
    }
    radio.sendString(reply)
})
let reply = ""
let hasCO2 = 0
let hasH20 = 0
let hasCH4 = 0
let hasO2 = 0
hasO2 = 1
hasCH4 = 0
hasH20 = 1
hasCO2 = 0
radio.setGroup(1)
