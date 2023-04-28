//your JS code here. If required.
let element = document.getElementById('level');
let level = 0;
while (element.parentNode.tagName !== 'HTML') {
  element = element.parentNode;
  level++;
}
alert(level);
