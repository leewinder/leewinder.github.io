// Teaching demo only — a stand-in for a compromised third-party script.
// It attaches a keystroke listener to the whole document and never removes it,
// so it keeps running even after the page that loaded it has been navigated
// away from (this is a client-side SPA, so the document itself never reloads).
//
// It logs to the console ONLY. It never sends captured input anywhere:
// no fetch, no XMLHttpRequest, no sendBeacon, no WebSocket, no storage.
(function () {
  if (window.__skimmerLoaded) return
  window.__skimmerLoaded = true

  document.addEventListener('keydown', function (e) {
    console.log('[skimmer]', e.key)
  })

  console.log('[skimmer] totally innocent script loaded, absolutely nothing to see here, or worry about!')
})()
