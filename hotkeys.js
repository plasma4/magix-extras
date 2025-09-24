var _hotkeysLoaded = false
G.AddData({
    name: 'Hotkeys',
    author: '1_e0',
    desc: 'Adds some simple QOL hotkeys to the game. (0 to reroll research, 1-9 to select research, hold Alt for temporary fast forward, and _ or - and = or + act as the multiply/divide by 10 for unit selection amount.',
    engineVersion: 1,
    manifest: 0,
    func: function () {
        // Custom implementation of keyboard events
        if (window.loadedMagix || _hotkeysLoaded) {
            return
        }
        _hotkeysLoaded = true
        document.addEventListener("keydown", function (e) {
            var key = e.key
            if (key >= '0' && key <= '9') {
                if (G.tab.id == 'tech') {
                    pressed = parseInt(key)
                    var chooseBox = G.chooseBox[0]
                    if (pressed === 0) {
                        if (G.speed > 0) { G.rerollChooseBox(chooseBox); } else G.cantWhenPaused();
                    } else if (pressed <= chooseBox.choices.length) {
                        if (G.speed > 0) { G.purchaseChooseBox(chooseBox, G.chooseBox[0].choices[pressed - 1], l("chooseOption-" + pressed + "-0")); } else G.cantWhenPaused();
                    }
                }
            } else if (key == "_" || key == "-") {
                if (G.tab.id == 'unit') l('removeBulk').click()
                if (G.tab.id == 'land' && G.mapZoomT == 2) {
                    G.mapZoomT = 1
                    G.mapOffXT /= 2
                    G.mapOffYT /= 2
                    G.tooltip.close()
                }
            } else if (key == "+" || key == "=") {
                if (G.tab.id == 'unit') l('addBulk').click()
                if (G.tab.id == 'land' && G.mapZoomT == 1) {
                    G.mapZoomT = 2
                    G.mapOffXT *= 2
                    G.mapOffYT *= 2
                    G.tooltip.close()
                }
            } else if (e.altKey) {
                if (!e.repeat) l("fastButton").click()
            }
        })
        document.addEventListener("keyup", function (e) {
            if (e.key === "Alt") {
                l("playButton").click()
            }
        })
        document.addEventListener("blur", function () {
            l("playButton").click()
        })
    }
})