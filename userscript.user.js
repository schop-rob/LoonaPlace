// ==UserScript==
// @name         Loona Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Consolidate our presence
// @author       roschoeppner
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://cdn.discordapp.com/attachments/697118849186791505/959974349245382696/unknown.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/schop-rob/LoonaPlace/main/overlaySpaced.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}