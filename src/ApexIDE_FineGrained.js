
var s = document.createElement('script');
var html = 'apex.ide.IDE.on("configLoaded", function() {apex.ide.IDE.fineGrained = true;setTimeout(function(){apex.ide.IDE.fineGrained=true}, 0)});';
html += '(function() {var listeners = apex.ide.IDE.events.configloaded.listeners;listeners.unshift(listeners.pop());})();';
s.innerHTML = html;
document.head.insertBefore(s, document.head.firstChild);
