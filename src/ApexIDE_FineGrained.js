
var s = document.createElement('script');
s.innerHTML = 'apex.ide.IDE.on("configLoaded", function() {apex.ide.IDE.fineGrained = true;setTimeout(function(){apex.ide.IDE.fineGrained=true}, 0)})';
document.body.appendChild(s);