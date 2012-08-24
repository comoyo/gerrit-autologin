(function() {
  var clickIfPresent = function(params) {
    var xPathExpr = "//" + (params.element || 'a') + "[text()='" + params.text + "']",
        link      = document.evaluate(xPathExpr, document, null,
                                         XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    if (link.singleNodeValue) {
      link.singleNodeValue.click();
      if (params.callback) {
        params.callback();
      }
    }
  };

  setTimeout(function() {
    clickIfPresent({ text: 'Continue', element: 'button' });
    clickIfPresent({ text: 'Sign In', callback: function() {
      clickIfPresent({ text: 'Sign in with a Google Account' });
    } });
  }, 1000);
})();
