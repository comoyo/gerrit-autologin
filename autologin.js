(function() {
  var clickIfPresent = function(text, callback) {
    var link = document.evaluate("//a[text()='" + text + "']", document, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null);
    console.log("Link", link);
    if (link.singleNodeValue) {
      link.singleNodeValue.click();
      if (callback) {
        callback();
      }
    }
  };

  setTimeout(function() {
    clickIfPresent('Sign In', function() {
      clickIfPresent('Sign in with a Google Account');
    });
  }, 1000);
})();
