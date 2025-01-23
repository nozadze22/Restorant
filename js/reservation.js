
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime () {
    const now = new Date();

document.getElementById("time").innerText = 
zeroPadding(now.getHours(),2) + ":"+ 
zeroPadding(now.getMinutes(), 2) + ":" + 
zeroPadding(now.getSeconds(),2);

document.getElementById("date").innerText = 
zeroPadding(now.getMonth(),2) + "_" +
zeroPadding(now.getDate(), 2) + " " +
week[now.getDay()];
}

updateTime()
setInterval(updateTime, 1000)

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0')
}


const btn = document.querySelector("#btn");
// const reservation = document.querySelector('#reservationForm')
const email = document.querySelector("#email")
const name_= document.querySelector("#name");
const phone = document.querySelector("#phone")
const date = document.querySelector("#date")
const time = document.querySelector("#time")
const guests = document.querySelector("#guests")

function displayAlert() {
  swal({
    title: "pleace fill it out",
    text: "Warning! All places not filled! This is required for Reservation",
    icon: "warning",
  });
  
} 

function displayAlertTwo() {
  swal({
    title: "Well done",
    text: "The reservation is complete",
    icon: "success",
  });
}


btn.addEventListener("click",() => {
  if(name_.value.length != "" && email.value.length !="" && phone.value.length != "" && 
    date.value != "" && time.value != "" && guests.value != "") {
   displayAlertTwo()
  }else {
    displayAlert()
  }
})

// $(document).ready(function() {
//   $('#reservationForm').submit(function(e) {
//       e.preventDefault();
//       alert('Reservation submitted successfully! We will contact you shortly to confirm.');
//   });
// });

// console.log(ready())

