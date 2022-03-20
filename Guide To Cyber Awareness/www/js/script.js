var show1 = document.getElementById('show1');
var show2 = document.getElementById('show2');
var show3 = document.getElementById('show3');
var show4 = document.getElementById('show4');
var close = document.getElementById('close');
var popuptitle = document.getElementById('popup-title');
var popuppara = document.getElementById('popup-para');
var popupBox = document.getElementById('popupBox');
var totalContainer = document.getElementById('totalContainer');
var solution1 = document.getElementById('solution1');
var solution2 = document.getElementById('solution2');
  popupBox.style.display = "none"

show1.addEventListener('click', function() {

  // code for button 1 comes here
  const email = [
  "Advise people not to open emails from recipients they don't know",
  "Advise people to never open unknown attachments or links.",
  ]
  totalContainer.style.display = "none"
  popupBox.style.display = "block"
  solution1.innerHTML = email[0]
  solution2.innerHTML = email[1]

});

show2.addEventListener('click', function() {

  // code for button 2 comes here
  const password = [
  "Add numbers and symbols for security",
  "Create rules that require employees to create unique, complex passwords of at least 12 characters; and change them if they ever have reason to believe that they have been compromised"
  ]
  totalContainer.style.display = "none"
  popupBox.style.display = "block"
  solution1.innerHTML = password[0]
  solution2.innerHTML = password[1]

});

show3.addEventListener('click', function() {
  
  // code for button 3 comes here
  const Antivirus = [
    "Set up all system updates to take place after work hours automatically",
    "Don't let any employee, no matter what their title, opt out of this company policy"
    ]
    totalContainer.style.display = "none"
    popupBox.style.display = "block"
    solution1.innerHTML = Antivirus[0]
    solution2.innerHTML = Antivirus[1]

});

show4.addEventListener('click', function() {

  // code for button 4 comes here
  const mobile = [
    "If a device is lost or stolen, have a point of contact to report this to and steps taken to deactivate the device remotely",
    "Do not conduct confidential transactions using untrusted public Wi-Fi"
    ]
    totalContainer.style.display = "none"
    popupBox.style.display = "block"
    solution1.innerHTML = mobile[0]
    solution2.innerHTML = mobile[1]


});

close.addEventListener('click', function() {
  // code for close comes here
  console.log("Close");
  totalContainer.style.display = "block"
  popupBox.style.display = "none"
});