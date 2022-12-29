// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

    
    
function TheLogin() {

var password = 'pab';

if (this.document.login.pass.value == password) {
  top.location.href="hub.html";
}
else {
  window.alert("Incorrect password, please try again.");
  }
}