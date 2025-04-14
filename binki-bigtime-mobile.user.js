// ==UserScript==
// @name binki-bigtime-mobile
// @homepageURL https://github.com/binki/binki-bigtime-mobile
// @version 1.0.0
// @match https://intuit.bigtime.net/bigtime
// @match https://intuit.bigtime.net/bigtime/*
// @match https://intuit.bigtime.net/Bigtime
// @match https://intuit.bigtime.net/Bigtime/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `.timer-fullpage .list .timer {
  background: black;
}

#main-pane {
  width: 100%;
}

@media only screen and (max-width: 960px) {
  .system-nav .bt-menubar {
    min-width: unset !important;
  }
  /* This gets in the way of clicking/tapping things especially on mobile. */
  #chatbot {
    display: none;
  }
}

`;
  document.head.append(style);
  document.querySelector('meta[name=viewport]').content = 'width=device-width, initial-scale=1';
})();
