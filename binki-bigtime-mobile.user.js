// ==UserScript==
// @name binki-bigtime-mobile
// @homepageURL https://github.com/binki/binki-bigtime-mobile
// @version 1.0.1
// @match https://*.bigtime.net/bigtime
// @match https://*.bigtime.net/bigtime/*
// @match https://*.bigtime.net/Bigtime
// @match https://*.bigtime.net/Bigtime/*
// ==/UserScript==

(async () => {
  // We are forced to use wildcard @match above but we don’t want to match irrelevant subdomains.
  // The only subdomain which has a fixed alternative purpose that we know about so far is “www.bigtime.net”,
  // so test for that. See #1.
  if (/^[^:]+:\/\/www\./.test(document.URL)) return;

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
