let hamburger = document.getElementById ('hamburgerbtn');
function hamburgerbtn () {
  document.getElementById ('hamburgerbtn').style.display = 'none';
  document.getElementById ('items').style.translate = '100px';
  document.getElementById ('closebtn').style.display = 'block';
  document.getElementById ('main').style.marginTop = '-15px';
}
function closebtn () {
  document.getElementById ('items').style.translate = '0px';
  document.getElementById ('closebtn').style.display = 'none';
  document.getElementById ('hamburgerbtn').style.display = 'block';
  document.getElementById ('hamburgerbtn').style.marginTop = '0px';
  document.getElementById ('main').style.marginTop = '0px';
  document.getElementById ('hamburgerbtn').style.display.remove = 'block';
}
