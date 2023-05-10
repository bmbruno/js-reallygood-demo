// Supporting code for all demoes; should not be modified

window.Demo = window.Demo || {};
window.Demo.output = "";
window.Demo.add = (message) => { window.Demo.output += `${message}<br/>` };
window.Demo.show = (target) => { document.getElementById(target).innerHTML = window.Demo.output };
window.Demo.clear = (target) => { window.Demo.output = ""; document.getElementBy(target).innerHTML = ""; }