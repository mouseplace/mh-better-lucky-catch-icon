// ==UserScript==
// @name         🐭️ MouseHunt - Better Lucky Catch Icon
// @version      1.1.0
// @description  Upscales the Lucky Catch icon so it isn't so blurry.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at      document-end
// ==/UserScript==

((function () {
  'use strict';

  const style = document.createElement('style');
  style.innerHTML = `.journal .entry.luckycatchsuccess .journalimage:after {
		background: url('https://www.mousehuntgame.com/images/ui/camp/trap/stat_luck.png?asset_cache_version=2');
		background-size: cover;
		background-repeat: no-repeat;
		height: 20px;
		width: 20px;
		top: -5px;
		left: -5px;
	}

	.journaltext .lucky:after {
		background: url('https://www.mousehuntgame.com/images/ui/camp/trap/stat_luck.png?asset_cache_version=2');
		background-size: contain;
		width: 15px;
		height: 15px;
		background-repeat: no-repeat;
		position: relative;
		top: 3px;
		margin: 0;
	}`;
  document.head.appendChild(style);
})());
