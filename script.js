
var typed = new Typed('.text', {
    strings: [ 'Programmer', 'Designer', 'Student'],
    typeSpeed: 150,
    backSpeed:150,
    looped:true
  });


function showMenuBar () {
    const menubar = document.querySelector('.sidebar');
    menubar.style.display = 'flex';
    const hidingMenuBar = document.querySelector('.menubar');
    hidingMenuBar.style.display = 'none';
}

function hidemenubar () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    const unHideMenuBAr = document.querySelector('.menubar');
    unHideMenuBAr.style.display = 'block';
}
