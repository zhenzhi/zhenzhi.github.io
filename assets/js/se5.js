// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Password',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "ux+") {
window.open('hcc.html','_self');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 