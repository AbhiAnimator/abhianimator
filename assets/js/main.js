"use strict";

//Toggle navigation

function openNav() {
   	document.getElementById('navigation').style.display = 'block';
  }
function closeNav() {
   	document.getElementById('navigation').style.display = 'none';
  }

  var menuItems = document.querySelectorAll('#navigation a');
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      closeNav();
    });
  });
  // function openNav() {
  //   document.getElementById("navigation").style.width = "100%";
  //   document.body.classList.add("mobile-open"); // Add the class to body element
  // }
  
  // function closeNav() {
  //   document.getElementById("navigation").style.width = "0";
  //   document.body.classList.remove("mobile-open"); // Remove the class from body element
  // }