// ==UserScript==
// @name         agar-mass-ejector
// @namespace    https://github.com/GaryGentile
// @version      0.03
// @description  A faster, continuous mass ejector for agar.
// @author       Gary Gentile
// @license      MIT
// @match        http://agar.io/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var amount = 6;
    var duration = 50; //ms

    var overwriting = function(evt) {
        if (evt.keyCode === 69) { // KEY_E
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({keyCode: 87}); // KEY_E
                    window.onkeyup({keyCode: 87});
                }, i * duration);
            }
        }
    };

    window.addEventListener('keydown', overwriting);
})();
