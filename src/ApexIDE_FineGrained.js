var s = document.createElement('script');
s.innerHTML = '(' + function() {
	apex.ide.IDE.on("configLoaded", function() {
		apex.ide.IDE.fineGrained = true;
	});
	var listeners = apex.ide.IDE.events.configloaded.listeners;
	listeners.unshift(listeners.pop());
} + ')();';
document.head.appendChild(s);
