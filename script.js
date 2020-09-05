/////////////* CLOCK *////////////////

  let isMilitaryTime = false;

  let militaryTime = document.getElementById('button24');
      militaryTime.addEventListener('click', function() { isMilitaryTime = true });

  let civilTime = document.getElementById('button12');
      civilTime.addEventListener('click', function() { isMilitaryTime = false });

function normalTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let amPm = hour >=12 ? 'PM' : 'AM';
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;

  if(isMilitaryTime === true) {
   document.getElementById("clock").innerHTML = hour + ':' + min + ':' + sec;
} else  { 
   amPm = hour >= 12 ? 'PM' : 'AM'
   hour = hour % 12 || 12;
   document.getElementById("clock").innerHTML = hour + ':' + min + ':' + sec + ' ' + amPm; 
}
setInterval(normalTime, 1000);


} 


normalTime();  

////////////* MONTH *////////////////////

function newMonth() {
  let date = new Date();
  let currentMonth = ['January', 'February',  'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                      'November', 'December'];
  let day = date.getDate();
  let year = date.getFullYear();
  let monthNumber = date.getMonth();
  let month = currentMonth[date.getMonth()];
  let fullDate = currentMonth[monthNumber] + ' - '  + date.getDate() + ' - ' + date.getFullYear(); 
  document.getElementById('date').innerHTML = fullDate;
}


newMonth();
