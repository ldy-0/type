const WX_BROWSER = /MicroMessenger/i;

//
function isWxBrowser(agent) {
  return WX_BROWSER.test(agent); 
}

module.exports = {
  isWxBrowser,
}