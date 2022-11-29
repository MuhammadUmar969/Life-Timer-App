let DOBOpen = false;
let DateBirth;
const settingCog1 = document.getElementById("settingIcon");
const settingContent1 = document.getElementById("settingContent");
const front1 = document.getElementById("front");
const after1 = document.getElementById("after");
const dobBtn1 = document.getElementById("dobBtn");
const dobInput1 = document.getElementById("dobInput");

const year1 = document.getElementById("year");
const month1 = document.getElementById("month");
const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minute1 = document.getElementById("minute");
const second1 = document.getElementById("second");

const twoDigit = (number) =>{
  return number > 9 ? number :`0${(number)}`;
}

const toggleDateOfBirth = () =>{
  if(DOBOpen){
    settingContent1.classList.add("hide");
  }
  else{
    settingContent1.classList.remove("hide");
  }
  DOBOpen = !false;
  console.log("Toggle", DOBOpen);
}

const updateAge = () =>{
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff/ (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff/ (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff/ (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff/ (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff/ (1000 * 60)) % 60;
  const second = Math.floor(dateDiff/1000) % 60;

  year1.innerHTML = twoDigit(year);
  month1.innerHTML = twoDigit(month);
  days1.innerHTML = twoDigit(day);
  hours1.innerHTML = twoDigit(hour);
  minute1.innerHTML = twoDigit(minute);
  second1.innerHTML = twoDigit(second);
}

const setDOBHandler = () =>{
 const dateString = dobInput1.value;

 dateOfBirth = dateString ?  new Date(dateString) : null;


 if(dateOfBirth){
    front1.classList.add("hide");
    after1.classList.remove("hide");
    setInterval(() => updateAge(),1000);
 }
 else{
    after1.classList.add("hide");
    front1.classList.remove("hide");
 }
}

setDOBHandler();

settingCog1.addEventListener("click", toggleDateOfBirth);
dobBtn1.addEventListener("click", setDOBHandler);

