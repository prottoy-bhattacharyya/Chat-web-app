// profile
var x = document.getElementById("myDIV");
x.style.display = 'none';
function myFunction() {
  var icon = document.getElementById("toggleIcon");
  
  if (x.style.display === "none") {
    x.style.display = "block";
    icon.src = "./image/down.png";
  } else {
    x.style.display = "none";
    icon.src = "./image/up.png";
  }

}
//notification
function toggleNotification() {
  var noti = document.getElementById("notificationDropdown");
  var icon = document.getElementById("notificationIcon");

  if (noti.style.display === "none" || noti.style.display === "") {
    noti.style.display = "block";
    icon.src = "./image/notification.png"; 
  } else {
    noti.style.display = "none";
    icon.src = "./image/bell.png"; 
  }
}
