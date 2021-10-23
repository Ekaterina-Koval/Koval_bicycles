'use strict';

function ValidPhone() {
  var re = /^\d[\d\(\)\ -]{4,14}\d$/;
  var myPhone = document.querySelector('#user-phone').value;
  var valid = re.test(myPhone);
  if (valid) output = 'Номер телефона введен правильно!';
  else output = 'Номер телефона введен неправильно!';
  document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
  return valid;
}

ValidPhone();
