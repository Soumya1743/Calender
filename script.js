let time = document.getElementById("current-time");
setInterval(() =>{
    let d = new Date();
    time.innerHTML = "Current-Time is: " + d.toLocaleTimeString();
});

let date = document.getElementById("current-date");
var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1);
var yy = today.getFullYear();
today = dd + '/' + mm + '/' + yy;
date.innerHTML = "Today's Date is:" + today;


